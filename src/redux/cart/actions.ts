import { CartActionTypes, TOGGLE_CART_VISIBILITY } from './types';

export const toggleCartVisibility = () : CartActionTypes => ({
    type: TOGGLE_CART_VISIBILITY,
});

