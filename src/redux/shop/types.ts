import { ShopCategory } from '../../types';
import { Dispatch } from 'redux';

export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS";
export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START";
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
export const FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE";

export interface FetchCollectionsStartAction {
    type: string;
    payload?: any;
}
export interface FetchCollectionsStartAsyncAction {
    type: string;
    payload: (dispatch: Dispatch) => void;
}
export interface FetchCollectionSuccessAction {
    type: string;
    payload: ShopCollectionsObject;
}
export interface FetchCollectionFailureAction {
    type: string;
    payload: string;
}

export type ShopCollectionInfo = ShopCategory;

export interface ShopCollectionsObject {
    [key: string]: ShopCategory;
}
export interface ShopState {
    collections?: ShopCollectionsObject;
    isFetching: boolean;
    errorMessage: string;
}

export type ShopActionTypes = FetchCollectionsStartAction | FetchCollectionsStartAsyncAction | FetchCollectionSuccessAction | FetchCollectionFailureAction;