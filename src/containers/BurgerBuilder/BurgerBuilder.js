import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import Buildcontrols from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        ingredient: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 40,
        purchable: false
    }

    addIngrefientHandler = (type) =>{
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount+1;
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

    removeIngrefientHandler = (type) =>{
        const oldCount = this.state.ingredient[type];
        if (oldCount<=0){
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

    updatePurchaseState = (items)=>{
        const sum = Object.keys(items)
            .map(igkey=>{
                return items[igkey];
            })
            .reduce((sum, el)=>{
                return sum + el
            },0);

        this.setState({purchable: sum>0})
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredient
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }
        return (
            <Aux>
                {/* <Modal>
                    <OrderSummary ingredient={this.state.ingredient}>
                    </OrderSummary>
                </Modal> */}
                <Modal>
                    <OrderSummary ingredient={this.state.ingredient}></OrderSummary>
                </Modal>
                <Burger ingredient={this.state.ingredient}/>
                <Buildcontrols 
                    ingredientAdded={this.addIngrefientHandler}
                    ingredientRemoved={this.removeIngrefientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchable={this.state.purchable}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;