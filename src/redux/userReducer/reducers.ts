import { User, UserActionTypes, SET_CURRENT_USER } from './types';

const INITIAL_STATE : User = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action: UserActionTypes) : User => {
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
