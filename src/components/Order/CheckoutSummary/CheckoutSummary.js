import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const CheckoutSummary = (props)=>{
    return (
        <div className={classes.CheckoutSummary}>
            <div style={{width : '100%', margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType='Success' clicked={props.checkoutContinue}>Continue</Button>
            <Button btnType='Danger' clicked={props.checkoutCancel}>Cancel</Button>
        </div>
    )
}

export default CheckoutSummary