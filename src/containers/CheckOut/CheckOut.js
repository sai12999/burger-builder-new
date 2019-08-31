import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactDetails from './ContactDetails/ContactDetails'
import {connect} from 'react-redux'

class CheckOut extends Component {

    checkoutContinueHandler() {
        this.props.history.push('/checkout/contactdetails')
    }

    checkoutCancelHandler() {
        this.props.history.goBack();
    }

    componentDidMount() {
        console.log("checkout mounted")
    }

    render() {
        console.log(this.props.match.url + '/contactdetails')
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>Burger Preview</h2>
                <CheckoutSummary ingredients={this.props.ingredients}
                    checkoutContinue={this.checkoutContinueHandler.bind(this)}
                    checkoutCancel={this.checkoutCancelHandler.bind(this)} />
                <Route exact path={this.props.match.url + '/contactdetails'} component={ContactDetails}/>
            </div>
        )
    }

}
const mapStateToProps = (state)=>{
    return {
        ingredients : state.ingredients,
    }
}
export default connect(mapStateToProps)(CheckOut)
