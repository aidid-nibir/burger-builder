import React from 'react';
import './SidebarToggle.css'

const Sidebartoggle = (props) => {
    return (
        <div className='DrawerToggle' onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Sidebartoggle;
