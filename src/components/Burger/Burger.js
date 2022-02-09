import React from 'react';
// import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import '../Burger/Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import { withRouter } from 'react-router';
const Burger = (props) => {
    // console.log(props);
    // props = All the ingredient (as object) from BurgerBuilder.js
    let transformedIngredient = Object.keys(props.ingredient)
        .map((igKey) => {
            return [...Array(props.ingredient[igKey])]
                .map((_, index) => {
                    return (<BurgerIngredient key={igKey + index} type={igKey} />)
                })
        })
        .reduce((previousValue, currentValue) => {
            return previousValue.concat(currentValue);
        }, []);
    if (transformedIngredient.length === 0) {
        transformedIngredient = <p>Please Start Adding Ingredients!</p>
    }
    return (
        <div className='Burger'>
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default withRouter(Burger);
