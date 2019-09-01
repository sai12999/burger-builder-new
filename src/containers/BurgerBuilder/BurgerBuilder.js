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
import * as burgerBuilderActionTypes from '../../store/actions/index'
import { connect } from 'react-redux'

class BurgerBuilder extends Component {

    state = {
        purchasable: false,
        purchasing: false,
    }

    componentDidMount() {
        this.props.ingredientsInit()
    }

    cancelPurchaseHandler = () => {
        this.setState(
            {
                purchasing: false
            })
    }

    continuePurchaseHandler = () => {
        this.props.purchaseInit()
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

        let burger = this.props.error ? <p>ingredients cant be fetched</p> : <Spinner />
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
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
}

const mapActionsToProps = (dispatcher) => {
    return {
        addIngredientHandler: (ingredientName) => dispatcher(burgerBuilderActionTypes.addIngredient(ingredientName)),
        deleteIngredientHandler: (ingredientName) => dispatcher(burgerBuilderActionTypes.removeIngredient(ingredientName)),
        ingredientsInit: () => dispatcher(burgerBuilderActionTypes.ingredientsInit()),
        purchaseInit : () => dispatcher(burgerBuilderActionTypes.purchaseInit())
    }
}

export default connect(mapStateToProps, mapActionsToProps)(withErrorHandler(BurgerBuilder, axios))