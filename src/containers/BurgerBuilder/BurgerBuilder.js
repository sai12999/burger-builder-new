import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import RoundToTwoDecimal from '../../common/RoundToTwoDecimal'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {
    meat: 0.6,
    salad: 0.3,
    bacon: 0.3,
    cheese: 0.5
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            salad: 0,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    cancelPurchaseHandler = () => {
        this.setState(
            {
                purchasing: false
            })
    }

    continuePurchaseHandler = () => {
        this.setState(
            {
                purchasing: false
            })
        alert("order placed successfully!")
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

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} bdclicked={this.cancelPurchasehandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancelHandler={this.cancelPurchaseHandler}
                        purchaseContinueHandler={this.continuePurchaseHandler}
                        price={this.state.totalPrice}
                    />
                </Modal>
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
    }
}

export default BurgerBuilder