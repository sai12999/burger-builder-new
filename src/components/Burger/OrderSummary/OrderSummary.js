import React from 'react'

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
            <p>Do You Want To Checkout!!</p>
        </div>
    )
}

export default orderSummary