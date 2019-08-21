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
        purchasable: false
    }

    purchasableHandler = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, ele) => {
            sum = sum + ele
            return sum
        }, 0)
        console.log(sum + "x")
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
        console.log(this.state.purchasable)
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
            console.log(this.state.purchasable)
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
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientDeleted={this.deleteIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                />
            </Auxiliary>
        )
    }
}

export default BurgerBuilder