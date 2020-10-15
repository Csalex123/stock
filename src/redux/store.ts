import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Products from './Products/Products.reducer';
import AuthenticationReducer from './Authentication/Authentication.reducer';


const rootReducer = combineReducers({
    product: Products,
    authentication: AuthenticationReducer,
});

const persistedReducer = persistReducer({
    key: 'algastock',
    storage,
    blacklist:['product']
}, rootReducer);

const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunk),
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const persistor = persistStore(store);

export interface Action<T = any> {
    type: string
    payload?: T
}

export type RootState = ReturnType<typeof rootReducer>;

export type Thunk<T = any> =
    ThunkAction<void, RootState, unknown, Action<T>>

export type ThunkDispatch = (Thunk: Thunk) => Promise<Thunk>

export { store, persistor };