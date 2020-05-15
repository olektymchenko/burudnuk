import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import uiReducer from './reducers/uiReducer';
import dataReducer from './reducers/dataReducer';
import userReducer from './reducers/userReducer';
<<<<<<< HEAD
import auctionsReducer from './reducers/auctionsReducer';
=======
>>>>>>> 34faca1b428f51b516e193d0e6882627e15bdd12

const initialState = {};

const persistConfig = {
    key: 'root',
    storage,
<<<<<<< HEAD
    whitelist: ['user', 'UI', 'auctions']
=======
    whitelist: ['user', 'UI']
>>>>>>> 34faca1b428f51b516e193d0e6882627e15bdd12
}

const middleware = [thunk];

const rootReducer = combineReducers({
    UI: uiReducer,
    data: dataReducer,
    user: userReducer,
<<<<<<< HEAD
    auctions: auctionsReducer
=======
>>>>>>> 34faca1b428f51b516e193d0e6882627e15bdd12
});


const reducers = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
export const store = createStore(reducers, initialState, enhancer);
export const persistor = persistStore(store);
export default { store, persistor };
