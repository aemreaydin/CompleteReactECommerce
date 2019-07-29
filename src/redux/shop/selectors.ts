import { createSelector } from 'reselect';
import { AppState } from '../index';
import { CollectionParamStrings } from '../../types';


const selectShop = (state : AppState) => state.shopReducer;

export const selectShopCollections = createSelector(selectShop, state => state.collections);

export const selectShopCollectionsForPreview = createSelector(selectShopCollections,
    collections => collections ? Object.keys(collections).map(key => collections[key]) : undefined);

export const selectShopCollection = (paramString: CollectionParamStrings) => createSelector(selectShopCollections,
    sections => sections ? sections[paramString]: undefined);

export const selectIsFetching = createSelector(selectShop, state => state.isFetching);

export const selectIsCollectionsLoaded = createSelector(selectShop, state => !!state.collections);