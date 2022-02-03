import React from 'react';

import './NavigationItems.css'

const Navigationitems = () => {
    return (
        <ul className='NavigationItems'>
            <li className='Items active'><a href="/">Burger Builder</a></li>
            <li className='Items'><a href="/">Checkout</a></li>
        </ul>
    );
}

export default Navigationitems;
