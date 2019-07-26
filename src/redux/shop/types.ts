import { ShopCategory } from '../../types';

export type ShopCollectionInfo = ShopCategory[];

export interface ShopState {
    collection: ShopCollectionInfo;
}

export interface ShopAction {
    type: string;
    payload?: any;
}