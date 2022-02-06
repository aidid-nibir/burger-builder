import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import Buildcontrols from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import Witherrorhandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import axios from '../../axios-order';

const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 30,
    meat: 60,
    bacon: 30
}
class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {}
    // }
    state = {
        ingredient: null,
        totalPrice: 40,
        purchable: false,
        purchasing: false,
        loading: false,
        error: false
    }
    componentDidMount() {
        axios.get('/ingredient.json')
            .then(successCallBack => {
                this.setState({ ingredient: successCallBack.data })
            })
            .catch(errorCallBack => {
                this.setState({ error: true })
            })
    }


    addIngrefientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredient
        }
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            ingredient: updatedIngredient,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredient);
    }

    removeIngrefientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredient
        }
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({
            ingredient: updatedIngredient,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredient);
    }

    updatePurchaseState = (items) => {
        const sum = Object.keys(items)
            .map(igkey => {
                return items[igkey];
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);

        this.setState({ purchable: sum > 0 })
    }

    purchasingHandler = () => {
        this.setState({ purchasing: true });
    }
    purchasingCancelHandler = () => {
        this.setState({ purchasing: false })
    }
    purchasingContinueHandler = () => {
        this.setState({ loading: true });
        const finalOrderData = {
            ingredients: this.state.ingredient,
            price: this.state.totalPrice,
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
                // console.log(successCallBack)
                this.setState({ loading: false, purchasing: false });
            })
            .catch(errorCallBack => {
                // console.log(errorCallBack)
                this.setState({ loading: false, purchasing: false });
            });

    }
    render() {
        const disabledInfo = {
            ...this.state.ingredient
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let OrderSummaryToLoad = null;
        if (this.state.ingredient) {
            OrderSummaryToLoad = <OrderSummary
                ingredient={this.state.ingredient}
                purchaseContinue={this.purchasingContinueHandler}
                purchaseCancled={this.purchasingCancelHandler}
                totalPrice={this.state.totalPrice}></OrderSummary>;
        }
        if (this.state.loading) {
            OrderSummaryToLoad = <Spinner />;
        }

        let getTheInghredientsFromServer = this.state.error ? <p>Ingredients Cant not be loaded</p> : <Spinner />;
        if (this.state.ingredient) {
            getTheInghredientsFromServer = (
                <Aux>
                    <Burger ingredient={this.state.ingredient} />
                    <Buildcontrols
                        ingredientAdded={this.addIngrefientHandler}
                        ingredientRemoved={this.removeIngrefientHandler}
                        disabled={disabledInfo}
                        totalPrice={this.state.totalPrice}
                        purchable={this.state.purchable}
                        purchasingDecision={this.purchasingHandler} />
                </Aux>)
        }
        return (
            <Aux>
                {/* {this.state.purchasing ? <Modal>
                    <OrderSummary ingredient={this.state.ingredient}></OrderSummary>
                </Modal>: null} */}

                <Modal show={this.state.purchasing} modalClosed={this.purchasingCancelHandler}>
                    {OrderSummaryToLoad}
                    {/* <OrderSummary 
                        ingredient={this.state.ingredient}
                        purchaseContinue={this.purchasingContinueHandler}
                        purchaseCancled={this.purchasingCancelHandler}
                        totalPrice={this.state.totalPrice}></OrderSummary> */}
                </Modal>

                {/* <Burger ingredient={this.state.ingredient}/>
                <Buildcontrols 
                    ingredientAdded={this.addIngrefientHandler}
                    ingredientRemoved={this.removeIngrefientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchable={this.state.purchable}
                    purchasingDecision={this.purchasingHandler}/> */}
                {getTheInghredientsFromServer}
            </Aux>
        );
    }
}

export default Witherrorhandler(BurgerBuilder, axios);