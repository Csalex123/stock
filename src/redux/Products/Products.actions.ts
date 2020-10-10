import { Product } from './../../shared/Table/Table.mockdata';

import { getAllProducts } from './../../services/Products.service';
import { ProductCreator } from './../../components/Products/ProductForm';
import { Action, Thunk } from './../store';


export const insertNewProduct = (product: ProductCreator): Action<ProductCreator> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: product
    }
}

export const getProducts = (): Thunk<Product[]> => async (dispatch) => {
    const products = await getAllProducts();
    dispatch ({
        type: 'FETCH_PRODUCTS',
        payload: products
    });
}