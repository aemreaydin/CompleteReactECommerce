import { UserState, UserActionTypes, SET_CURRENT_USER } from './types';

const INITIAL_STATE : UserState = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action: UserActionTypes) : UserState => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}
