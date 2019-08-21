import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import RoundToTwoDecimal from '../../common/RoundToTwoDecimal'

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
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedIngredients[type] + 1
        const updatedPrice = RoundToTwoDecimal(this.state.totalPrice + INGREDIENT_PRICES[type])
        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice })
    }

    deleteIngredientHandler = (type) => {
        if (this.state.ingredients[type] !== 0) {
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type]--
            const updatedPrice = RoundToTwoDecimal(this.state.totalPrice - INGREDIENT_PRICES[type])
            this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice })
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
                <Burger
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientDeleted={this.deleteIngredientHandler}
                    disabled={disabledInfo}
                />
            </Auxiliary>
        )
    }
}

export default BurgerBuilder