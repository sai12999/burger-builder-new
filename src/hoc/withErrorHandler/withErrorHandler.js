import React, { Component } from 'react'
import Auxiliary from '../Auxiliary'
import Modal from '../../components/UI/Modal/Modal'


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.axiosResponseRef = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            })

            this.axiosRequestRef = axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.axiosRequestRef)
            axios.interceptors.response.eject(this.axiosResponseRef)
        }

        errorConfirmedHandler() {
            this.setState({ error: null })
        }

        render() {
            return (
                <Auxiliary>
                    <Modal show={this.state.error} bdclicked={this.errorConfirmedHandler.bind(this)}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliary>
            )
        }
    }
}

export default withErrorHandler