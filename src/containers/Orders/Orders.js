import React, { Component } from 'react';
import Singleorder from './SingleOrder/SingleOrder';
import axios from '../../axios-order';
import Witherrorhandler from '../../hoc/WithErrorHandler/WithErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(successCallBack => {
                const loadedOrders = [];
                for (let key in successCallBack.data) {
                    loadedOrders.push({
                        ...successCallBack.data[key],
                        id: key
                    })
                }
                this.setState({ orders: loadedOrders, loading: false })
            })
            .catch(errorCallBack => {
                this.setState({ loading: false })
            })
    }

    render() {

        return (
            <div>
                {this.state.orders.map(el => (
                    <Singleorder
                        key={el.id}
                        ingredient={el.ingredients}
                        price={el.price} />
                ))}
            </div>
        );
    }
}
export default Witherrorhandler(Orders, axios);