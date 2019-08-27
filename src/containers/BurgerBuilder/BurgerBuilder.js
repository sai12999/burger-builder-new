import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import RoundToTwoDecimal from '../../common/RoundToTwoDecimal'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
    meat: 0.6,
    salad: 0.3,
    bacon: 0.3,
    cheese: 0.5
}
class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    componentDidMount() {
        axios.get('https://react-db-9d268.firebaseio.com/ingredients.json').then(response => {
            this.setState({ ingredients: response.data })
            this.purchasableHandler(this.state.ingredients)
        })
    }

    cancelPurchaseHandler = () => {
        this.setState(
            {
                purchasing: false
            })
    }

    continuePurchaseHandler = () => {
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'sam',
                address: {
                    zip: 523001,
                    street: 'sujatha nagar',
                    country: 'india'
                },
                email: 'sai12999.k@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(res => this.setState({ loading: false, purchasing: false }))
            .catch(error =>
                this.setState({ loading: false, purchasing: false }))

    }

    purchasingHandler = () => {
        this.setState(
            {
                purchasing: true
            })
    }

    purchasableHandler = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, ele) => {
            sum = sum + ele
            return sum
        }, 0)
        this.setState({ purchasable: sum > 0 })
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedIngredients[type] + 1
        const updatedPrice = RoundToTwoDecimal(this.state.totalPrice + INGREDIENT_PRICES[type])
        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice })
        this.purchasableHandler(updatedIngredients)
    }

    deleteIngredientHandler = (type) => {
        if (this.state.ingredients[type] !== 0) {
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type]--
            const updatedPrice = RoundToTwoDecimal(this.state.totalPrice - INGREDIENT_PRICES[type])
            this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice })
            this.purchasableHandler(updatedIngredients)
        }
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        let burger = <Spinner />
        if (this.state.ingredients) {
            burger = (
                <Auxiliary>
                    <Burger
                        ingredients={this.state.ingredients}
                    />
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientDeleted={this.deleteIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        purchasingHandler={this.purchasingHandler}
                        price={this.state.totalPrice}
                    />
                </Auxiliary>
            )
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                purchaseCancelHandler={this.cancelPurchaseHandler}
                purchaseContinueHandler={this.continuePurchaseHandler}
                price={this.state.totalPrice}
            />
        }
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} bdclicked={this.cancelPurchaseHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios)