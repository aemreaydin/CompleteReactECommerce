import { ShopState, ShopAction, UPDATE_COLLECTIONS } from './types';
const INITIAL_STATE : ShopState = {
    collections: {

    }
}

export const shopReducer = (state = INITIAL_STATE, action: ShopAction) : ShopState => {
    switch(action.type) {
      case UPDATE_COLLECTIONS:
        return {
          ...state,
          collections: action.payload
        }
      default:
        return state;
    }
}