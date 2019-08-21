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
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label}
                    label={ctrl.label}
                    added={props.ingredientAdded}
                    deleted={props.ingredientDeleted}
                    type={ctrl.type}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}>
                Order Now
            </button>
        </div>
    )
}

export default BuildControls