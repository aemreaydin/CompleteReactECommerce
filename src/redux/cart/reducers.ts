import { CartState, CartActionTypes, TOGGLE_CART_VISIBILITY } from './types';

const INITIAL_STATE : CartState = {
    visibility: false
}

export const cartReducer = (state = INITIAL_STATE, action: CartActionTypes) : CartState => {
    switch(action.type) {
        case TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                visibility: !state.visibility
            }
        default:
            return state;
    }
}