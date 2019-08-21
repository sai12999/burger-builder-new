import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.css'

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) =>
            <BurgerIngredients key={igKey + i} type={igKey} />
        )
    }).reduce((arr, curr) => {
        return arr.concat(curr)
    }, [])

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start Adding Ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <div>
                <label>Price Of Your Burger : </label>
                {props.price}$
            </div>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default burger