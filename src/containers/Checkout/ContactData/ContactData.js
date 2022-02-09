import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner'
import './ContactData.css'
class Contactdata extends Component {
    state = {
        name: '',
        address: {
            area: '',
            road: '',
            flat: '',
            house: '',
            email: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        // console.log(this.props);
        event.preventDefault();
        // console.log(this.props.ingredient)
        // console.log(this.props.price)
        this.setState({ loading: true });
        const finalOrderData = {
            ingredients: this.props.ingredient,
            price: this.props.price,
            customer: {
                name: 'Aidid Nibir',
                address: {
                    area: 'Bailey Road',
                    road: 'Bailey Road',
                    flat: '15',
                    house: '32',
                    email: 'aidid.nibir@gmail.com'
                }
            }
        }
        axios.post('/orders.json', finalOrderData)
            .then(successCallBack => {
                console.log(finalOrderData);
                // console.log(successCallBack)
                this.setState({ loading: false, purchasing: false });
                this.props.history.push('/');
            })
            .catch(errorCallBack => {
                // console.log(errorCallBack)
                this.setState({ loading: false, purchasing: false });
            });
    }
    render() {
        let form = (<form>
            <input className='Input' type="text" name="fullName" placeholder='Your Full Name' />
            <input className='Input' type="text" name="area" placeholder='area' />
            <input className='Input' type="text" name="road" placeholder="road" />
            <input className='Input' type="text" name="flat" placeholder="flat" />
            <input className='Input' type="text" name="house" placeholder="house" />
            <input className='Input' type="email" name="emalil" placeholder="emalil" />
            <br />
            <div>
                <Button buttonType="btn-4a" clicked={this.orderHandler}>Confirm Order</Button>
            </div>

        </form>);
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className='ContactData'>
                <h4>Enter Your Data Bellow</h4>
                {form}
            </div>
        );
    }
}

export default Contactdata;
