import React from 'react';
import './SingleOrder.css'
const Singleorder = (props) => {
    // let transformedIngredient = Object.keys(props.ingredient)
    //     .map((igKey) => {
    //         return [...Array(props.ingredient[igKey])]
    //             .map((_, index) => {
    //                 return (<BurgerIngredient key={igKey + index} type={igKey} />)
    //             })
    //     })
    //     .reduce((previousValue, currentValue) => {
    //         return previousValue.concat(currentValue);
    //     }, []);

    const transformedIngredient = [];
    for (let ingredient in props.ingredient) {
        transformedIngredient.push({
            name: ingredient,
            amount: props.ingredient[ingredient]
        })
    }
    const preparedeIngredients = transformedIngredient.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px',
                borderRadius: '3px'
            }}
            key={ig.name}>{ig.name} ({ig.amount})</span>
    })
    return (
        <div className='Order'>
            <p> <strong> Ingredient: </strong>{preparedeIngredients}</p>
            <p>Price: <strong>{props.price}</strong></p>
        </div>
    );
}

export default Singleorder;
