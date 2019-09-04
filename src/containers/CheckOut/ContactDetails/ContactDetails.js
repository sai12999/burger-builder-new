import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactDetails.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import { withRouter } from 'react-router-dom'
import Input from '../../../components/UI/Input/Input'
import {connect} from 'react-redux'
import * as orderActions from '../../../store/actions/index'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'

class ContactDetails extends Component {
    state = {
        ordersForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    placeholder: 'Your Name',
                    type: 'text'
                },
                validations: {
                    required: true
                },
                value: '',
                valid: false, 
                isTouched : false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    placeholder: 'Your Mail',
                    type: 'text'
                },
                validations: {
                    required: true
                },
                value: '',
                valid: false, 
                isTouched : false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fast Delivery' },
                        { value: 'normal', displayValue: 'Normal Delivery' }
                    ]
                },
                value: 'fastest',
                validations: {

                },
                valid: true, 
                isTouched : true
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    placeholder: 'Your Street',
                    type: 'text'
                },
                validations: {
                    required: true
                },
                value: '',
                valid: false, 
                isTouched : false
            },
            postalcode: {
                elementType: 'input',
                elementConfig: {
                    placeholder: 'Your ZipCode',
                    type: 'text'
                },
                validations: {
                    required: true
                },
                value: '',
                valid: false, 
                isTouched : false
            }
        },
        isValid : false
    }

    validityHandler = (value, rules) => {
        let valid = true
        if (!rules) {
            return valid
        }

        if (rules.required) {
            valid = value.trim('') !== ''
        }
        return valid
    }
   
    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        const orderData = {}
        for (let element in this.state.ordersForm) {
            orderData[element] = this.state.ordersForm[element].value
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: orderData
        }
        this.props.purchaseBurger(order)
        this.props.history.push('/')
    }

    changeHandler = (event, inputElement) => {
        let isValid = true, i=0
        const updatedOrderForm = {
            ...this.state.ordersForm
        }
        updatedOrderForm[inputElement].value = event.target.value
        updatedOrderForm[inputElement].valid = this.validityHandler(updatedOrderForm[inputElement].value, updatedOrderForm[inputElement].validations)
        for (let element in this.state.ordersForm) {
            isValid = isValid && this.state.ordersForm[element].valid
        }
        updatedOrderForm[inputElement].isTouched = true
        this.setState({ ordersForm: updatedOrderForm, isValid: isValid })
       
    }

    render() {
        let formArray = []
        for (let element in this.state.ordersForm) {
            formArray.push({ id: element, config: this.state.ordersForm[element] })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {
                    formArray.map(formElement => {
                        return (
                            <Input
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                changeHandler={(event) => this.changeHandler(event, formElement.id)}
                                invalid = {!this.state.ordersForm[formElement.id].valid}
                                isTouched = {this.state.ordersForm[formElement.id].isTouched}
                            />
                        )
                    })}

                <Button btnType="Success" disabled={!this.state.isValid} clicked={this.orderHandler}>Order</Button>
            </form>
        )
        if (this.props.loading)
            form = <Spinner />
        return (
            <div className={classes.ContactDetails}>
                <h3>Enter your contact details</h3>
                {form}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        ingredients : state.burgerBuilder.ingredients,
        price : state.burgerBuilder.totalPrice,
        loading : state.order.loading
    }
}

const mapActionsToProps = (dispatcher)=>{
    return{
        purchaseBurger : (orderData)=>dispatcher(orderActions.purchaseBurger(orderData)),
    }
}
export default connect(mapStateToProps, mapActionsToProps)(withRouter(withErrorHandler(ContactDetails, axios)))