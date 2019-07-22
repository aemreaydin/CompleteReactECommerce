import { ShopItemData } from '../../types';
export const TOGGLE_CART_VISIBILITY = "TOGGLE_CART_VISIBILITY";
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const DECREASE_CART_ITEM_QUANTITY = 'DECREASE_CART_ITEM_QUANTITY';

export type CartVisibility = boolean;

export interface CartItemInfo extends ShopItemData {
    quantity: number;
}

export interface CartState {
    visibility: boolean;
    cartItems: CartItemInfo[];
}

// export type state = CartItem[] & CartVisibility

interface ToggleCartVisibilityAction {
    type: string;
    payload?: CartVisibility;
}
interface AddCartItemAction {
    type: string;
    payload: CartItemInfo;
}
interface DecreaseCartItemQuantityAction {
    type: string;
    payload: CartItemInfo;
}
interface RemoveCartItemAction {
    type: string;
    payload: CartItemInfo;
}

export type CartActionTypes = ToggleCartVisibilityAction | AddCartItemAction | RemoveCartItemAction | DecreaseCartItemQuantityAction;