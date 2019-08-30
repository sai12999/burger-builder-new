import React from 'react'
import classes from './Order.css'

const order = (props) => {
    let i = 0
    console.log(props.ingredients)
    let ingredients = Object.keys(props.ingredients).map(ingredient => {
        return (
            <span style={{
                textTransform : 'capitalize',
                display : 'inline-block',
                margin : '0 8px',
                border : '1px solid #ccc',
                padding : '5px',
                boxSizing : 'border-box'
            }} key={i++}>{ingredient} : {props.ingredients[ingredient]} </span>
        )
    })
    console.log(props.ingredients)
    return (
        <div className={classes.Order}>
            <b>Ingredients</b> : {ingredients}
            <br />
            <br />
            <b>Price</b> : {props.price}
        </div>
    )
}

export default order