import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actionTypes from '../../store/actions/index'
import {connect} from 'react-redux'

class Orders extends Component {

    componentWillMount() {
        this.props.fetchOrders()
    }

    render() {
        let spinner = null
        if (this.props.loading)
            spinner = <Spinner />
        let fetchedOrders = null
        if (this.props.orders) {
            const orders = this.props.orders
            fetchedOrders = Object.keys(orders).reverse().map(order => {
                return (<Order key={order} ingredients={orders[order].ingredients} price={orders[order].price} />)
            })
        }
        return (
            <div>
                {spinner}
                {fetchedOrders}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapActionsToProps = (dispatcher) => {
    return {
        fetchOrders: () => dispatcher(actionTypes.fetchOrders())
    }
}
export default connect(mapStateToProps, mapActionsToProps)(withErrorHandler(Orders, axios))