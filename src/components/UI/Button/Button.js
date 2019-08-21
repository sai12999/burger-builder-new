import React from 'react'
import classes from './Button.css'

const button = () => {
    return (
        <div
            className={[classes.button, classes[props.btnType]].join(" ")}
            onClick={props.clicked}>
            {props.children}
        </div>
    )
}