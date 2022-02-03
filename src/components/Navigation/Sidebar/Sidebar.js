import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';
import './Sidebar.css'

const Sidebar = (props) => {
    let attachedClass = 'Sidebar Close';
    if (props.open){
        attachedClass = 'Sidebar Open';
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClass}>
                    <Logo height="11%"/>
                    <nav>
                        <Navigationitems/>
                    </nav> 
                </div>
        </Aux>
    );
}

export default Sidebar;
