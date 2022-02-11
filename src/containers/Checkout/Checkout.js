import React, { Component } from 'react';
import Checkoutsummary from '../../components/CheckoutSummary/CheckoutSummary';
import Contactdata from './ContactData/ContactData';
import { Route } from 'react-router-dom'
class Checkout extends Component {
    state = {
        ingredient: null,
        totalPrice: 0
    }
    componentWillMount = () => {
        // console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        const ingredientFromUrl = {}
        let price = 0;
        for (let params of query.entries()) {
            if (params[0] === 'price') {
                price = params[1]
            }
            else {

                ingredientFromUrl[params[0]] = + params[1];
            }
        }
        this.setState({ ingredient: ingredientFromUrl, totalPrice: price });
    }
    continueCheckoutHandler = () => {
        this.props.history.replace('/checkout/contact-data');
        console.log(this.state.ingredient);
    }
    cancelCheckoutHandler = () => {
        this.props.history.replace('/');
    }
    render() {
        return (
            <div>
                <Checkoutsummary
                    ingredient={this.state.ingredient}
                    onCheckoutCancel={this.cancelCheckoutHandler}
                    onCheckoutContinue={this.continueCheckoutHandler}></Checkoutsummary>
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) =>
                        (<Contactdata ingredient={this.state.ingredient} price={this.state.totalPrice} {...props} />)} />
            </div>
        );
    }
}

export default Checkout;
