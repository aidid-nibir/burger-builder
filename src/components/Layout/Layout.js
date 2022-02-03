import React, {Component} from 'react';
import './Layout.css'
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

class Layout extends Component {
    state = {
        showSideBar: false,
    }
    sidebarCloseHandler = () =>{
     this.setState({showSideBar: false})   
    }
    SidebartoggleClicked = ()=>{
        this.setState((previousState)=>{
            return { showSideBar: !previousState.showSideBar}  
        })
    }
    render(){
        return(
            <Aux>
                <div>
                    <Toolbar SidebartoggleClicked={this.SidebartoggleClicked} />
                    <Sidebar open={this.state.showSideBar} closed={this.sidebarCloseHandler}/>
                </div>

                <main className='content'>
                    {this.props.children}
                </main>
            </Aux>
        )}
} 
export default Layout;
