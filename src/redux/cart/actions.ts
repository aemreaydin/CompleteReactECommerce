import { CartActionTypes, TOGGLE_CART_VISIBILITY, ADD_CART_ITEM, CartItemInfo } from './types';

export const toggleCartVisibility = () : CartActionTypes => ({
    type: TOGGLE_CART_VISIBILITY,
});

export const addCartItem = (cartItem: CartItemInfo) : CartActionTypes => ({
    type: ADD_CART_ITEM,
    payload: cartItem
});