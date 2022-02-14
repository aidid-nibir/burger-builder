import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import Buildcontrols from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import Witherrorhandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import axios from '../../axios-order';
import * as actionType from '../../Store/Actions/index'

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        // loading: false,
        // error: false
    }
    componentDidMount() {
        this.props.getIngredient();
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
        const queryParams = [];
        for (let i in this.state.ingredient) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredient[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }
    render() {
        const disabledInfo = {
            ...this.props.ing
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let OrderSummaryToLoad = null;
        if (this.props.ing) {
            OrderSummaryToLoad = <OrderSummary
                ingredient={this.props.ing}
                purchaseContinue={this.purchasingContinueHandler}
                purchaseCancled={this.purchasingCancelHandler}
                totalPrice={this.props.price}></OrderSummary>;
        }
        if (this.state.loading) {
            OrderSummaryToLoad = <Spinner />;
        }

        let getTheInghredientsFromServer = this.props.error ? <p>Ingredients Cant not be loaded</p> : <Spinner />;
        if (this.props.ing) {
            getTheInghredientsFromServer = (
                <Aux>
                    <Burger ingredient={this.props.ing} />
                    <Buildcontrols
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        totalPrice={this.props.price}
                        purchable={this.state.purchable}
                        purchasingDecision={this.purchasingHandler} />
                </Aux>)
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchasingCancelHandler}>
                    {OrderSummaryToLoad}
                </Modal>
                {getTheInghredientsFromServer}
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ing: state.ingredient,
        price: state.totalPrice,
        error: state.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ingNmae) => dispatch(actionType.addIngredient(ingNmae)),
        onIngredientRemoved: (ingNmae) => dispatch(actionType.removeIngredient(ingNmae)),
        getIngredient: () => dispatch(actionType.getIngredient()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Witherrorhandler(BurgerBuilder, axios));