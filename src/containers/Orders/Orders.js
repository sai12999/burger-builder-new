import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'

class Orders extends Component {
    state ={
        orders : null
    }
    componentDidMount() {
        axios.get('https://react-db-9d268.firebaseio.com/orders').then(orders=>{
            this.setState({orders:orders})
        })
    }
    render() {
        let orders = null
        console.log('orders :'+this.state.orders)
        if(this.state.orders)
        {
            orders=this.state.orders.map(order=>{
                return <Order ingredients={order.ingredients} price={order.price} />
            })
        }
        return (
            <div>
                {orders}
            </div>
        )
    }
}

export default Orders