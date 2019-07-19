import { CartItem, CartState, CartActionTypes, TOGGLE_CART_VISIBILITY, ADD_CART_ITEM } from './types';
import { addItemToCart} from './utils';
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
                cartItems: addItemToCart(state.cartItems, action.payload as CartItem)
            }
        default:
            return state;
    }
}