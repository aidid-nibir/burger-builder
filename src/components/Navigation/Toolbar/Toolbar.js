import React from 'react';
import './Toolbar.css'
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import Sidebartoggle from '../Sidebar/SidebarToggle/SidebarToggle';

const Toolbar = (props) => {
    return (
        <header className='Toolbar'>
            <Sidebartoggle clicked={props.SidebartoggleClicked}/>
            <Logo height="80%"/>
            <nav className='DesktopOnly'>
                <Navigationitems/>
            </nav>
        </header>
    );
}

export default Toolbar;
