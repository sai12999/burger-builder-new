import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {
    state = {
        orders: null,
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json').then(orders => {
            this.setState({ orders: orders.data, loading: false })
        })
    }

    render() {
        let spinner = null
        if (this.state.loading)
            spinner = <Spinner />
        let fetchedOrders = null
        if (this.state.orders) {
            const orders = this.state.orders
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

export default withErrorHandler(Orders, axios)