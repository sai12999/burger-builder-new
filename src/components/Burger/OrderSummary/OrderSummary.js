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
            <ul>
                {ingredientSummary}
            </ul>
        </div>
    )
}

export default orderSummary