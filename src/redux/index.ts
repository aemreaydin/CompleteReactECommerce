import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { userReducer } from './user/reducers';
import { cartReducer } from './cart/reducers';
import { directoryReducer } from './directory/reducers';
import { shopReducer } from './shop/reducers';

const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    directoryReducer,
    shopReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartReducer']
};
export type AppState = ReturnType<typeof persistedReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);


const middlewares = [];
if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const middlewareEnhancer = applyMiddleware(...middlewares);
export const store = createStore(persistedReducer,
    composeWithDevTools(middlewareEnhancer));


export const persistor = persistStore(store);