import { ShopItemData } from '../../types';
export const TOGGLE_CART_VISIBILITY = "TOGGLE_CART_VISIBILITY";
export const ADD_CART_ITEM = 'ADD_CART_ITEM';

export type CartVisibility = boolean;
export interface CartItem extends ShopItemData {
    quantity: number;
}

export interface CartState {
    visibility: boolean;
    cartItems: CartItem[];
}

// export type state = CartItem[] & CartVisibility

interface ToggleCartVisibilityAction {
    type: string;
    payload?: CartVisibility;
}
interface AddCartItemAction {
    type: string;
    payload: CartItem;
}

export type CartActionTypes = ToggleCartVisibilityAction | AddCartItemAction;