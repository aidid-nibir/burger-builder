import React, { Component } from 'react';
import Checkoutsummary from '../../components/CheckoutSummary/CheckoutSummary';
import Contactdata from './ContactData/ContactData';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
class Checkout extends Component {
    continueCheckoutHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    cancelCheckoutHandler = () => {
        this.props.history.replace('/');
    }
    render() {
        return (
            <div>
                <Checkoutsummary
                    ingredient={this.props.ing}
                    onCheckoutCancel={this.cancelCheckoutHandler}
                    onCheckoutContinue={this.continueCheckoutHandler}></Checkoutsummary>
                <Route
                    path={this.props.match.path + '/contact-data'} component={Contactdata} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ing: state.ingredient
    }
}

export default connect(mapStateToProps)(Checkout);
