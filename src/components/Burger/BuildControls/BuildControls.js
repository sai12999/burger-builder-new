import React from 'react'
import classes from './BuildControls.css'
import BuildControl from '../BuildControls/BuildControl/BuilControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]
const BuildControls = (props) => {

    return (
            <div className={classes.BuildControls}>
                <div>
                    <label className={classes.Label}>Price Of Your Burger : </label>
                    {props.price}$
                </div>
                {controls.map(ctrl => (
                    <BuildControl key={ctrl.label}
                        label={ctrl.label}
                        added={()=>props.ingredientAdded(ctrl.type)}
                        deleted={()=>props.ingredientDeleted(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                    />
                ))}
                <button
                    className={classes.OrderButton}
                    disabled={!props.purchasable}
                    onClick={() => props.purchasingHandler()}>
                    Order Now
            </button>
            </div>
    )
}

export default BuildControls