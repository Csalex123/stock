import { createStore, combineReducers } from 'redux';
import Products from './Products/Products.reducer';

const reducers = combineReducers({
    product: Products,
});

const store = createStore(reducers);

export default store;