import { ShopCategory } from '../../types';

export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS";
export type ShopCollectionInfo = ShopCategory;

export interface ShopCollectionsObject {
    [key: string]: ShopCategory;
}
export interface ShopState {
    collections: ShopCollectionsObject;
}

export interface ShopAction {
    type: string;
    payload: ShopCollectionsObject;
}