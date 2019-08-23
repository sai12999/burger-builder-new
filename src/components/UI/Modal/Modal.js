import React, { Component } from 'react'
import classes from './Modal.css'
import Auxiliary from '../../../hoc/Auxiliary'
import BackDrop from '../BackDrop/BackDrop'


class Modal extends Component {
    shouldComponentUpdate(nextprops,nextstate)
    {
        return nextprops.show!==this.props.show
    }
    render() {
        return (
            <Auxiliary>
                <BackDrop show={this.props.show} bdclicked={this.props.bdclicked} />
                <div
                    className={classes.Modal}
                    style={{ transform: this.props.show ? 'translateY(0)' : 'translateY(-1000vh)' }}>
                    {this.props.children}
                </div>
            </Auxiliary>
        )
    }
}


export default Modal