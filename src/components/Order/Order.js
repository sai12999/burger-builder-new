import React from 'react'
import classes from './Order.css'

const order = (props) => {
    let ingredients = Object.keys(this.props.ingredients).map(ingredient=>{
        return(
            <p>{ingredient} : {this.props.ingredients[ingredient]}</p>
        )
    })
    console.log(this.props.ingredients)
    return (
        <div className={classes.Order}>
            <p>Ingredients : {ingredients}</p>
        </div>
    )
}

export default order