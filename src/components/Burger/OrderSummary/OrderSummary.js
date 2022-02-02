import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredient)
        .map(igkey=>{
            return (<li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span>: {props.ingredient[igkey]}</li>);
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger With the Following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
}

export default OrderSummary;
