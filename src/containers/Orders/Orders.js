import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'

class Orders extends Component {
    state ={
        orders : null
    }
    componentDidMount() {
        console.log("orders mounted")
        axios.get('/orders.json').then(orders=>{
            this.setState({orders:orders.data})
        })
        
    }
    render() {
        let orders = null
        let fetchedOrders='';
        if(this.state.orders)
        {
            for(let order in orders){
                fetchedOrders +=  (<Order ingredients={order.ingredients} price={order.price}/>)
            }
        }
        return (
            <div>
                {fetchedOrders}
            </div>
        )
    }
}

export default Orders