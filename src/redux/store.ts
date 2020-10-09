import { createStore, combineReducers } from 'redux';
import Products from './Products/Products.reducer';

const rootReducer  = combineReducers({
    product: Products,
});

const store = createStore(
    rootReducer,
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;