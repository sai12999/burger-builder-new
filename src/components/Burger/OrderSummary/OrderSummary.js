import React from 'react'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li
            key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
            : {props.ingredients[igKey]}
        </li>
    })
    return (
        <div>
            Your Yummy Burger With Following Ingredients Is Ready
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price : {props.price}$</p>
            <p>Do You Want To Checkout!!</p>
            <Button btnType="Danger" clicked={props.purchaseCancelHandler}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinueHandler}>Continue</Button>
        </div>
    )
}

export default orderSummary