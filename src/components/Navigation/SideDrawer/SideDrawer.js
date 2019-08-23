import React from 'react'
import classes from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/BackDrop/BackDrop'
import Auxiliary from '../../../hoc/Auxiliary'

const sideDrawer = (props) => {
    let attatchedClasses= [classes.SideDrawer,classes.Close];
    if(props.show)
    attatchedClasses= [classes.SideDrawer,classes.Open];
    return (
        <Auxiliary>
            <BackDrop show={props.show} bdclicked={props.bdclicked} />
            <div className={attatchedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    )
}

export default sideDrawer