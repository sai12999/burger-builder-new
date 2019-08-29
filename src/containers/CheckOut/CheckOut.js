import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactDetails from './ContactDetails/ContactDetails'

class CheckOut extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    checkoutContinueHandler() {
        this.props.history.push('/checkout/contactdetails')
    }

    checkoutCancelHandler() {
        this.props.history.goBack();
    }

    componentDidMount() {
        console.log("checkout mounted")
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search)
        console.log(query)
        //['salad','1']
        const ingredients = {}
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                this.setState({ price: +param[1] })
            }
            else
                ingredients[param[0]] = +param[1]
        }

        this.setState({ ingredients: ingredients })
    }

    render() {
        
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>Burger Preview</h2>
                <CheckoutSummary ingredients={this.state.ingredients}
                    checkoutContinue={this.checkoutContinueHandler.bind(this)}
                    checkoutCancel={this.checkoutCancelHandler.bind(this)} />
                <Route exact path={this.props.match.url + '/contactdetails'} render={()=>(<ContactDetails ingredients={this.state.ingredients} price={this.state.price}/>)} />
            </div>
        )
    }

}

export default CheckOut
