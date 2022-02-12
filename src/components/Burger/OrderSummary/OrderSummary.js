import React from 'react';
import './OrderSummary.css'
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredient)
        .map(igkey => {
            return (<li key={igkey}><span style={{ textTransform: 'capitalize' }}>{igkey}</span>: {props.ingredient[igkey]}</li>);
        })

    return (
        <Aux>
            <div>
                <h3 style={{ textAlign: 'center', marginLeft: '-39px' }}>Your Order</h3>
                <p >A delicious Burger With the Following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p style={{ textAlign: 'center', marginLeft: '-39px' }}>
                    <strong>Total Price: {props.totalPrice}</strong><br />
                    <strong>Continue to Checkout?</strong>
                </p>
            </div>
            <div style={{ textAlign: 'center', marginLeft: '-39px' }}>

                {/* pure dynamic buttons from button component bellow */}
                <Button buttonType='btn-4a' clicked={props.purchaseContinue}>Continue</Button>
                <Button buttonType='btn-4b' clicked={props.purchaseCancled}>Cancel</Button>

                {/* normal buttons bellow */}
                {/* <button className='btn btn-4 btn-4a'>Continue</button>
                <button className='btn btn-4 btn-4b'>Cancel</button> */}

                {/* normal buttons bellow */}
                {/* <button className='Continue'>Continue</button>
                <button className='Cancel'>Cancel</button> */}
            </div>
        </Aux>
    );
}

export default OrderSummary;
