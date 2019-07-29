import { ShopState, ShopActionTypes, FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, ShopCollectionsObject } from './types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { ThunkDispatch } from 'redux-thunk';


export const FetchCollectionsStartAction = () : ShopActionTypes => ({
    type: FETCH_COLLECTIONS_START
});

export const FetchCollectionSuccessAction = (collection: ShopCollectionsObject) : ShopActionTypes => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collection
});

export const FetchCollectionFailureAction = (message: string) : ShopActionTypes => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: message
});

export const FetchCollectionSuccessActionAsync = () => {
    return (dispatch: ThunkDispatch<ShopState, undefined, any>) => {
        const collectionRef = firestore.collection('collections');
        dispatch(FetchCollectionsStartAction());

        collectionRef.get().then(snapshot => {
            const collection = convertCollectionsSnapshotToMap(snapshot);
            dispatch(FetchCollectionSuccessAction(collection));
        }).catch(error => dispatch(FetchCollectionFailureAction(error.message)));
    }
}