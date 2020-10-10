
import { getAllProducts } from './../../services/Products.service';
import { ProductCreator } from './../../components/Products/ProductForm';
import { Action } from "./Products.reducer"

export const insertNewProduct = (product: ProductCreator): Action<ProductCreator> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: product
    }
}

export const getProducts = () => async (dispatch: any) => {
    const products = await getAllProducts();
    dispatch ({
        type: 'FETCH_PRODUCTS',
        payload: products
    });
}