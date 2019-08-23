import React, { Component } from 'react'
import Button from '../../UI/Button/Button'


class OrderSummary extends Component {
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li
                key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
                : {this.props.ingredients[igKey]}
            </li>
        })
        return(
            <div>
                Your Yummy Burger With Following Ingredients Is Ready
                <ul>
                { ingredientSummary }
                </ul>
                <p>Total Price : {this.props.price}$</p>
                <p>Do You Want To Checkout!!</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelHandler}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinueHandler}>Continue</Button>
            </div>
        )
    }
}

export default OrderSummary