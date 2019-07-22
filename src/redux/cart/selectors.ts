import { createSelector } from 'reselect';

import { AppState } from '../';
import { CartState } from './types';

const selectCart = (state: AppState) : CartState => state.cartReducer;

export const selectCartItems = createSelector(selectCart, cart => cart.cartItems);

export const selectCartHidden = createSelector(selectCart, state => state.visibility);

export const selectCartItemCount = createSelector(selectCartItems,
    item => item.reduce((accumulate, item) => item.quantity + accumulate, 0));

export const selectCartTotal = createSelector(selectCartItems,
    item => item.reduce((accumulate, item) => item.quantity * item.price + accumulate, 0));