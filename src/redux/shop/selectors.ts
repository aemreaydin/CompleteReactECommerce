import { createSelector } from 'reselect';
import { AppState } from '../index';

const selectShop = (state : AppState) => state.shopReducer;

export const selectShopCollection = createSelector(selectShop, state => state.collection);