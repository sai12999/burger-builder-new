import React from 'react'
import classes from './ToolBar.css'
import Logo from '../../Logo/Logo'

const toolBar = (props)=>{
    return (
        <header className={classes.ToolBar}>
            <div>Menu</div>
            <Logo />
            <nav className={classes.Nav}>...</nav>
        </header>
    )
}

export default toolBar