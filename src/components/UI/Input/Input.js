import React from 'react';
import './Input.css'
const Input = (props) => {
    let inputElements = null;
    switch (props.inpt) {
        case ('input'):
            inputElements = <input className={!props.invalidIndecator ? 'InputElements Invalid' : 'InputElements'}  {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case ('textArea'):
            inputElements = <textArea className={!props.invalidIndecator ? 'InputElements Invalid' : 'InputElements'} {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        default:
            inputElements = <input className={!props.invalidIndecator ? 'InputElements Invalid' : 'InputElements'} {...props.elementConfig} value={props.value} onChange={props.changed} />
    }
    return (
        <div className='Input'>
            <label className='Lable'>{props.lable}</label>
            {inputElements}
        </div>
    );
}

export default Input;
