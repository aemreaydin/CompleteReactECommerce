export type FirebaseUser = firebase.User | null;
export interface UserState {
    currentUser: FirebaseUser;
}
export const SET_CURRENT_USER = "SET_CURRENT_USER";

interface SetCurrentUserAction {
    type: typeof SET_CURRENT_USER;
    payload: FirebaseUser;
}

export type UserActionTypes = SetCurrentUserAction;