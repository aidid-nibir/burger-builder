import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <button className={['btn btn-4',props.buttonType].join(' ')} onClick={props.clicked}>{props.children}</button>
    );
}

export default Button;
