import { createSelector } from 'reselect';

import { AppState } from '../';
import { CartState } from './types';

const selectCart = (state: AppState) : CartState => state.cartReducer;

export const selectCartItem = createSelector(selectCart, cart => cart.cartItems);

export const selectCartHidden = createSelector(selectCart, state => state.visibility);

export const selectCartItemCount = createSelector(selectCartItem,
    item => item.reduce((accumulate, item) => item.quantity + accumulate, 0));