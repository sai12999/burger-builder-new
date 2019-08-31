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
import * as actionTypes from '../../store/actionTypes'
import {connect} from 'react-redux'

class BurgerBuilder extends Component {

    state = {
        purchasable: false,
        purchasing: false,
        loading: false
    }

    componentDidMount() {
        // axios.get('https://react-db-9d268.firebaseio.com/ingredients.json').then(response => {
        //     this.setState({ ingredients: response.data })
        //     this.purchasableHandler(this.state.ingredients)
        // })
    }

    cancelPurchaseHandler = () => {
        this.setState(
            {
                purchasing: false
            })
    }

    continuePurchaseHandler = () => {

        this.props.history.push('/checkout')

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
        return sum > 0 
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        let burger = <Spinner />
        if (this.props.ings) {
            burger = (
                <Auxiliary>
                    <Burger
                        ingredients={this.props.ings}
                    />
                    <BuildControls
                        ingredientAdded={this.props.addIngredientHandler}
                        ingredientDeleted={this.props.deleteIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.purchasableHandler(this.props.ings)}
                        purchasingHandler={this.purchasingHandler}
                        price={this.props.price}
                    />
                </Auxiliary>
            )
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                purchaseCancelHandler={this.cancelPurchaseHandler}
                purchaseContinueHandler={this.continuePurchaseHandler}
                price={this.props.price}
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

const mapStateToProps = (state) => {
    console.log(state)
    return {
        ings: state.ingredients,
        price : state.totalPrice
    }
}

const mapActionsToProps = (dispatcher) => {
    return {
        addIngredientHandler: (ingredientName) => dispatcher({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingredientName }),
        deleteIngredientHandler: (ingredientName) => dispatcher({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingredientName })
    }
}

export default connect(mapStateToProps, mapActionsToProps)(withErrorHandler(BurgerBuilder, axios))