import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom'
import ContactDetails from './ContactDetails/ContactDetails'
import { connect } from 'react-redux'

class CheckOut extends Component {

    checkoutContinueHandler() {
        this.props.history.push('/checkout/contactdetails')
    }

    checkoutCancelHandler() {
        this.props.history.goBack();
    }

    render() {
        let summary = Redirect('/')
        if (this.props.ingredients) {
            const purchased = this.props.purchased?Redirect('/'):null
            summary = (
                <div>
                    {purchased}
                    <h2 style={{ textAlign: 'center' }}>Burger Preview</h2>
                    <CheckoutSummary ingredients={this.props.ingredients}
                        checkoutContinue={this.checkoutContinueHandler.bind(this)}
                        checkoutCancel={this.checkoutCancelHandler.bind(this)} />
                    <Route exact path={this.props.match.url + '/contactdetails'} component={ContactDetails} />
                </div>
            )
        }
        return (
            <div>
                {summary}
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        purchased : state.order.purchased
    }
}
export default connect(mapStateToProps)(CheckOut)
