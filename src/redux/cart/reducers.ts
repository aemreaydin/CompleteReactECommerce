import { CartItemInfo, CartState, CartActionTypes, TOGGLE_CART_VISIBILITY, ADD_CART_ITEM, REMOVE_CART_ITEM, DECREASE_CART_ITEM_QUANTITY } from './types';
import { addItemToCart, removeItemFromCart, removeItemByOne } from './utils';
const INITIAL_STATE : CartState = {
    visibility: false,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action: CartActionTypes) : CartState => {
    switch(action.type) {
        case TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                visibility: !state.visibility
            }
        case ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload as CartItemInfo)
            }
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload as CartItemInfo)
            }
        case DECREASE_CART_ITEM_QUANTITY:
            console.log("decrease");
            return {
                ...state,
                cartItems: removeItemByOne(state.cartItems, action.payload as CartItemInfo)
            }
        default:
            return state;
    }
}