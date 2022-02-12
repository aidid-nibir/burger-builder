import * as actionType from './Actions'

const initialState = {
    ingredient: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
    },
    totalPrice: 40,
};
const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 30,
    meat: 60,
    bacon: 30
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENT:
            return {
                ...state,
                ingredient: {
                    ...state.ingredient,
                    [action.ingredientName]: state.ingredient[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionType.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredient: {
                    ...state.ingredient,
                    [action.ingredientName]: state.ingredient[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
        default:
            return state;
    }
}

export default reducer;