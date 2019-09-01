import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const orderSuccess = (orderId, orderData) => {
    return {
        type: actionTypes.ORDER_SUCCESS,
        orderId: orderId,
        orderData: orderData
    }
}

export const orderFail = (error) => {
    return {
        type: actionTypes.ORDER_FAIL,
        error: error
    }
}

export const orderStart = () => {
    return {
        type: actionTypes.ORDER_START
    }
}

export const purchaseBurger = (orderData) => {
    return dispatcher => {
        dispatcher(orderStart())
        axios.post('/orders.json', orderData)
            .then(res => dispatcher(orderSuccess(res.data.name, orderData)))
            .catch(error => dispatcher(orderFail(error)))
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrders = () => {
    return dispatcher => {
        dispatcher(fetchOrderStart)
        axios.get('/orders.json').then(orders => {
            dispatcher(fetchOrderSuccess(orders.data))
        }).catch(error=>{
            dispatcher(fetchOrdersFail(error))
        })
    }
}

export const fetchOrderSuccess = (orders)=>{
    return {
        type : actionTypes.FETCH_ORDERS_SUCCESS,
        orders : orders
    }
}

export const fetchOrdersFail = (error)=>{
    return {
        type : actionTypes.FETCH_ORDERS_FAIL,
        error : error
    }
}

export const fetchOrderStart = () =>{
    return {
        type : actionTypes.FETCH_ORDERS_START
    }
}