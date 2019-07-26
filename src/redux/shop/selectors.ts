import { createSelector } from 'reselect';
import { AppState } from '../index';
import { CollectionParamStrings } from '../../types';


const selectShop = (state : AppState) => state.shopReducer;

export const selectShopCollections = createSelector(selectShop, state => state.collection);

export const selectShopCollectionsForPreview = createSelector(selectShopCollections,
    collections => Object.keys(collections).map(key => collections[key]));

export const selectShopCollection = (paramString: CollectionParamStrings) => createSelector(selectShopCollections,
    sections => sections[paramString])