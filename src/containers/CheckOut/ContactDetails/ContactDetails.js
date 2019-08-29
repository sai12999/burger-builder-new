import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactDetails.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import {withRouter} from 'react-router-dom'

class ContactDetails extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalcode: ''
        },
        loading : false
    }
    orderHandler=(event)=>
    {
        event.preventDefault()
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.ingredients,
            price: this.props.price,
            customer: {
                name: 'sam',
                address: {
                    zip: 523001,
                    street: 'sujatha nagar',
                    country: 'india'
                },
                email: 'sai12999.k@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(res => this.setState({ loading: false }))
            .catch(error =>
                this.setState({ loading: false }))
        this.props.history.push('/')
    }
    render() {
        let form = (
            <form className={classes.Form}>
            <input className={classes.Input} type="text" name="name" placeholder="name"/>
            <input className={classes.Input} type="text" name="email" placeholder="email"/>
            <input className={classes.Input} type="text" name="street" placeholder="street"/>
            <input className={classes.Input} type="text" name="postalcode" placeholder="postalcode"/>
            <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        )
        if(this.state.loading)
        form = <Spinner />
        return (
            <div className={classes.ContactDetails}>
                <h3>Enter your contact details</h3>
                {form}
            </div>
        )
    }
}

export default withRouter(ContactDetails)