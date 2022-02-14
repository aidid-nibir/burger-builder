import * as actionType from '../Actions/actionsTypes'

const initialState = {
    ingredient: null,
    totalPrice: 40,
    error: false
};
const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 30,
    meat: 60,
    bacon: 30
};

const reducer = (state = initialState, action) => {
    console.log(action);
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
        case actionType.SET_INGREDIENT:
            return {
                ...state,
                ingredient: {
                    salad: action.ingredient.salad,
                    bacon: action.ingredient.bacon,
                    cheese: action.ingredient.cheese,
                    meat: action.ingredient.meat,
                },
                error: false
            }
        case actionType.SET_INGREDIENT_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

export default reducer;