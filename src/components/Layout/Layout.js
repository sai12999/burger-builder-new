import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import classes from './Layout.css'
import ToolBar from '../Navigation/ToolBar/ToolBar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state ={
        open : false
    }

    sideDrawerCloseHandler(){
        this.setState({open:false})
    }

    sideDrawerOpenHandler(){
        this.setState({open:true})
    }

    render() {
        return (
            <Auxiliary>
                <SideDrawer show={this.state.open} bdclicked={this.sideDrawerCloseHandler.bind(this)}/>
                <ToolBar sdclicked={this.sideDrawerOpenHandler.bind(this)}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}
export default Layout