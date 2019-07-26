import { ShopCategory } from '../../types';

export type ShopCollectionInfo = ShopCategory;

export interface ShopCollectionsObject {
    [key: string]: ShopCategory;
}
export interface ShopState {
    collection: ShopCollectionsObject;
}

export interface ShopAction {
    type: string;
    payload?: any;
}