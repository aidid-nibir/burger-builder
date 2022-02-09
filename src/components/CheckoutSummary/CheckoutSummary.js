import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import './CheckoutSummary.css'
const Checkoutsummary = (props) => {
    return (
        <div className='CheckoutSummary'>
            <h1>We Hope It Tastes Well</h1>
            <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
                <Burger ingredient={props.ingredient} />
            </div>
            <Button buttonType="btn-4b" clicked={props.onCheckoutCancel}>Cancel</Button>
            <Button buttonType="btn-4a" clicked={props.onCheckoutContinue}>Continue</Button>
        </div>
    );
}

export default Checkoutsummary;
