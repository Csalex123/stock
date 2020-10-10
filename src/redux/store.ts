import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import Products from './Products/Products.reducer';

const rootReducer = combineReducers({
    product: Products,
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;