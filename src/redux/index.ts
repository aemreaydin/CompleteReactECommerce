import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { userReducer } from './user/reducers';
import { cartReducer } from './cart/reducers';
const rootReducer = combineReducers({
    userReducer,
    cartReducer
});

const middlewares = [logger];
const middlewareEnhancer = applyMiddleware(...middlewares);


export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer,
                        composeWithDevTools(middlewareEnhancer));