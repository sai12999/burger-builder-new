import React, { Component } from 'react'
import Auxiliary from '../Auxiliary'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state={
            error : null
        }
        componentWillMount(){
            axios.interceptors.response.use(res=>res, error=>{
                this.setState({error : error})
            })

            axios.interceptors.request.use(req=>{
                this.setState({error : null})
                return req
            })
        }

        errorConfirmedHandler(){
            this.setState({error : null})
        }

        render() {
            return (
                <Auxiliary>
                    <Modal show={this.state.error} bdclicked={this.errorConfirmedHandler.bind(this)}>
                        {this.state.error?this.state.error.message:null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliary>
            )
        }
    }
}

export default withErrorHandler