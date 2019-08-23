import React from 'react'
import classes from './ToolBar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolBar = (props) => {
    return (
        <header className={classes.ToolBar}>
            <div onClick={()=>props.sdclicked()}>Menu</div>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.Nav}>
                <div className={classes.DesktopOnly}>
                    <NavigationItems />
                </div>
            </nav>
        </header>
    )
}

export default toolBar