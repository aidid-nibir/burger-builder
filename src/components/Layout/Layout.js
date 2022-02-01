import React from 'react';
import './Layout.css'
import Aux from '../../hoc/Auxiliary';

const Layout = (props) => {
    return (
        <Aux>
            <div>
                Toolbar, Sidebar, Backdop
            </div>
            
            <main className='content'>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;
