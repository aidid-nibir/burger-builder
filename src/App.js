import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
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
          {/* {this.state.hudai ? <BurgerBuilder /> : null} */}
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
