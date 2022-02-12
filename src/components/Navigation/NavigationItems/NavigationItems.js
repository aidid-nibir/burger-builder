import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItems.css'

const Navigationitems = (props) => {
    return (
        <ul className='NavigationItems'>
            <li className='Items'><NavLink exact activeClassName='my-active' to="/">Burger Builder</NavLink></li>
            <li className='Items'><NavLink activeClassName='my-active' to="/checkout">Checkout</NavLink></li>
            <li className='Items'><NavLink activeClassName='my-active' to="/orders">Orders</NavLink></li>
        </ul>
    );
}

export default Navigationitems;
