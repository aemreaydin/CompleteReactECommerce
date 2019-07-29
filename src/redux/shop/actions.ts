import { ShopAction, UPDATE_COLLECTIONS, ShopCollectionsObject } from './types';

export const updateCollections = (collectionsMap: ShopCollectionsObject) : ShopAction => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
});