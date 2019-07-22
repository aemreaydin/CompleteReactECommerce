import { CartActionTypes, TOGGLE_CART_VISIBILITY, ADD_CART_ITEM, REMOVE_CART_ITEM, CartItemInfo, DECREASE_CART_ITEM_QUANTITY } from './types';

export const toggleCartVisibility = () : CartActionTypes => ({
    type: TOGGLE_CART_VISIBILITY,
});

export const addCartItem = (cartItem: CartItemInfo) : CartActionTypes => ({
    type: ADD_CART_ITEM,
    payload: cartItem
});

export const removeCartItem = (cartItem: CartItemInfo) : CartActionTypes => ({
    type: REMOVE_CART_ITEM,
    payload: cartItem
});

export const decreaseCartItemQuantity = (cartItem: CartItemInfo) : CartActionTypes => ({
    type: DECREASE_CART_ITEM_QUANTITY,
    payload: cartItem
});