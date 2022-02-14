import * as  actionsTypes from './actionsTypes'
import axios from '../../axios-order'


export const purchaseBurgerSuccess = (id, oderData) => {
    return {
        type: actionsTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: oderData
    }
}
export const purchaseBurgerFailed = (error) => {
    return {
        type: actionsTypes.PURCHASE_BURGER_FAILED,
        error: error
    }
}

export const purchasingTheBurger = (orderData) => {
    return dispatch => {
        axios.post('/orders.json', orderData)
            .then(successCallBack => {
                dispatch(purchaseBurgerSuccess(successCallBack.data, orderData))
            })
            .catch(errorCallBack => {
                dispatch(purchaseBurgerFailed(errorCallBack));
            });
    }
}