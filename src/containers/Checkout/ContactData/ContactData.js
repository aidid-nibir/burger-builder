import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input';
import WithErrorHandler from '../../../hoc/WithErrorHandler/WithErrorHandler'
import * as actionType from '../../../Store/Actions/index'
import { connect } from 'react-redux'
import './ContactData.css'
class Contactdata extends Component {
    state = {
        orderForm: {
            fullName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 15
                },
                valid: false
            },
            area: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Area'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 15

                },
                valid: false
            },
            roadNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: '01'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 15
                },
                valid: false
            },
            flatNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Flat Number'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 15
                },
                valid: false
            },
            houseNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your House Number'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 15
                },
                valid: false
            },
            emailAddress: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 30

                },
                valid: false
            }
        },
        fullFormValidation: false,
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const orderFormData = {};
        for (let orderDataElement in this.state.orderForm) {
            orderFormData[orderDataElement] = this.state.orderForm[orderDataElement].value;
        }
        const finalOrderData = {
            ingredients: this.props.ing,
            price: this.props.price,
            orderData: orderFormData

        }
        this.props.onPurchaseBurger(finalOrderData)
    }
    validationHandler = (value, rules) => {
        let isValid = false;
        if ((rules.required)) {
            isValid = (value.trim() !== '') && isValid;
        }
        if (rules.minLength) {
            isValid = (value.length >= rules.minLength) && (value.length <= rules.maxLength);
        }
        return isValid;
    }
    inputChangeHandler = (event, inputIdentifier) => {
        // console.log(event.target.value)
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedOrderFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedOrderFormElement.value = event.target.value;
        updatedOrderFormElement.valid = this.validationHandler(updatedOrderFormElement.value, updatedOrderFormElement.validation);
        updatedOrderForm[inputIdentifier] = updatedOrderFormElement;
        // console.log(updatedOrderForm);

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ orderForm: updatedOrderForm, fullFormValidation: formIsValid });

    }
    render() {
        let orderFormObject = [];
        for (let key in this.state.orderForm) {
            orderFormObject.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {orderFormObject.map(el => (
                    <Input
                        key={el.id}
                        elementType={el.config.elementType}
                        elementConfig={el.config.elementConfig}
                        value={el.config.value}
                        invalidIndecator={el.config.valid}
                        changed={(event) => this.inputChangeHandler(event, el.id)}
                    />
                ))}
                <br />
                <div>
                    {/* <Button buttonType="btn-4a" clicked={this.orderHandler}>Confirm Order</Button> */}
                    <Button buttonType="btn-4a" disabled={!this.state.fullFormValidation}>Confirm Order</Button>
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

const mapStateToProps = (state) => {
    return {
        ing: state.ingredient,
        price: state.totalPrice
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onPurchaseBurger: (finalOrderData) => dispatch(actionType.purchasingTheBurger(finalOrderData)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(Contactdata, axios));
