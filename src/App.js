import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom'
import Orders from './containers/Orders/Orders';
// import {WithRoute} from 'react-router-dom'

class App extends Component {
  useNavigate() {

  };
  // state = {
  //   hudai: true
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ hudai: false })
  //   }, 5000);
  // }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            {/* {this.state.hudai ? <BurgerBuilder /> : null} */}
            {/* <BurgerBuilder /> */}
            {/* <Checkout/> */}
            <Route exact path='/' component={BurgerBuilder} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
