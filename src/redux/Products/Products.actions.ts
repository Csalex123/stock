import { ProductCreator } from './../../components/Products/ProductForm';
import { Action } from "./Products.reducer"

export const insertNewProduct = (product: ProductCreator): Action<ProductCreator> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: product
    }
}