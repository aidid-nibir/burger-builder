import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { lable: 'Salad', type: 'salad'},
    { lable: 'Bacon', type: 'bacon'},
    { lable: 'Cheese', type: 'cheese'},
    { lable: 'Meat', type: 'meat'},
];
const Buildcontrols = (props) => {
    let totalPrice = props.totalPrice;
    let orderButtonDisabled = true;
    if (totalPrice>40){
        orderButtonDisabled = false;
    }
    return (
        <div className='BuildControls'>
            {totalPrice > 40 ? <h4>Total Price: {totalPrice}</h4>: <h4>Base Price: {totalPrice}</h4>}
            {controls.map(el =>
                <BuildControl 
                    key={el.lable} 
                    lable={el.lable}
                    added={()=>props.ingredientAdded(el.type)}
                    removed={() => props.ingredientRemoved(el.type)}
                    disabled={props.disabled[el.type]}
                    purchable={props.purchable}/>
            )}
            <br/><br/>
            <button className='OrderButton' disabled={orderButtonDisabled}>ORDER NOW</button>
            {/* <button className='OrderButton' disabled={!props.purchable}>ORDER NOW</button> */}
            <br/><br/>
        </div>
    );
}

export default Buildcontrols;
