import * as  actionsTypes from './actionsTypes'
import axios from '../../axios-order'

export const addIngredient = (name) => {
    return {
        type: actionsTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionsTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredient = (ingredient) => {
    return {
        type: actionsTypes.SET_INGREDIENT,
        ingredient: ingredient
    }
}
export const setIngredientFailed = () => {
    return {
        type: actionsTypes.SET_INGREDIENT_FAILED
    }
}
export const getIngredient = () => {
    return dispatch => {
        axios.get('/ingredient.json')
            .then(successCallBack => {
                console.log(successCallBack.data);
                dispatch(setIngredient(successCallBack.data))
            })
            .catch(errorCallBack => {
                dispatch(setIngredientFailed)
            })
    }
}