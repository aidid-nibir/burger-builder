import React, { Component } from 'react';
import Checkoutsummary from '../../components/CheckoutSummary/CheckoutSummary';
class Checkout extends Component {
    state = {
        ingredient: {
            salad: 1,
            cheese: 1,
            meat: 1,
            bacon: 1
        }
    }
    render() {
        return (
            <div>
                <Checkoutsummary ingredient={this.state.ingredient}></Checkoutsummary>
            </div>
        );
    }
}

export default Checkout;
