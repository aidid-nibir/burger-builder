import * as  actionsTypes from './actionsTypes'
import axios from '../../axios-order'

export const purchaseBurgerStart = () => {
    return {
        type: actionsTypes.PURCHASE_BURGER_START
    }
};
export const purchaseBurgerSuccess = (id, oderData) => {
    return {
        type: actionsTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: oderData
    }
};
export const purchaseBurgerFailed = (error) => {
    return {
        type: actionsTypes.PURCHASE_BURGER_FAILED,
        error: error
    }
};
export const purchasingTheBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then(successCallBack => {
                dispatch(purchaseBurgerSuccess(successCallBack.data.name, orderData));
                orderData.historyData.push('/');
            })
            .catch(errorCallBack => {
                dispatch(purchaseBurgerFailed(errorCallBack));
            });
    }
};