import React from 'react';
import './Logo.css'
import BurgerLogo from '../../Assets/Images/burger-logo.png'

const Logo = (props) => {
    return (
        <div className='Logo' style={{height: props.height}}>
           <img src={BurgerLogo} alt="MyBurger" /> 
        </div>
    ); 
}

export default Logo;
