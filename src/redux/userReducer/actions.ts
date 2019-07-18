import { SET_CURRENT_USER, FirebaseUser, UserActionTypes } from './types';

export const setCurrentUser = (user: FirebaseUser) : UserActionTypes => ({
    type: SET_CURRENT_USER,
    payload: user
});