import * as actionsTypes from '../Actions/actionsTypes'

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const ReducerOrder = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionsTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.oderData,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder)
            };
        case actionsTypes.PURCHASE_BURGER_FAILED:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
export default ReducerOrder;