export const TOGGLE_CART_VISIBILITY = "TOGGLE_CART_VISIBILITY";
export type CartVisibility = boolean;

export interface CartState {
    visibility: boolean;
}

interface ToggleCartVisibilityAction {
    type: string;
    payload?: CartVisibility;
}

export type CartActionTypes = ToggleCartVisibilityAction;