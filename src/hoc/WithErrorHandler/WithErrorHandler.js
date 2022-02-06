import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary';


const Witherrorhandler = (WrappedComponent, axios) => {

    return class extends Component {
        state = {
            error: null
        }
        componentDidMount() {
            this.reqInterceptor = axios.interceptors.response.use(request => {
                this.setState({ error: null })
                return request;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            });
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }
        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <div>
                        <WrappedComponent {...this.props} />
                    </div>
                </Aux>
            )
        }
    }
}

export default Witherrorhandler;
