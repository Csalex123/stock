import React, { useState, useCallback, useEffect } from 'react';
import Swal from 'sweetalert2';

import Table, { TableHeader } from '../../shared/Table';
import { Product } from '../../shared/Table/Table.mockdata';
import ProductForm, { ProductCreator } from './ProductForm';
import { useSelector, useDispatch } from 'react-redux';
import * as ProductActions from '../../redux/Products/Products.actions'
import { RootState, ThunkDispatch } from '../../redux/store';

const headers: TableHeader[] = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price' },
    { key: 'stock', value: 'Available Stock', right: true },
]

const ProductCRUD = () => {
    const dispatch: ThunkDispatch = useDispatch();
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>();

    const products = useSelector<RootState>(state => {
        return state.product;
    })

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    async function fetchData() {
        dispatch(ProductActions.getProducts())
            .catch(showErrorAlert);
    }

    const showErrorAlert = (err: Error) => {
        return Swal.fire('Opps!', err.message, 'error');
    }

    const handleProductSubmit = async (product: ProductCreator) => {
        dispatch(ProductActions.insertNewProduct(product))
            .catch(showErrorAlert);
    }

    const handleProductUpdate = async (newProduct: Product) => {
        dispatch(ProductActions.updateProducts(newProduct))
            .then(() => setUpdatingProduct(undefined))
            .catch(showErrorAlert);
    }

    const handleProductDetail = useCallback((product: Product) => {
        Swal.fire(
            'Product detail',
            `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            'info'
        )
    }, []);

    const deleteProduct = async (id: string) => {
        dispatch(ProductActions.deleteProduct(id))
            .then(() => {
                Swal.fire('Unhul!', 'Product successfully deleted', 'success');
            })
            .catch(showErrorAlert)
    }

    const handleProductDelete = (product: Product) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, delete ${product.name}!`
        }).then(({ value }) => {
            return value && deleteProduct(product._id);
        })
    }

    return <>
        <Table
            data={products}
            headers={headers}
            enableActions
            onDelete={handleProductDelete}
            onDetail={handleProductDetail}
            onEdit={setUpdatingProduct}

        />
        <ProductForm
            form={updatingProduct}
            onSubmit={handleProductSubmit}
            onUpdate={handleProductUpdate}
        />
    </>
}

export default ProductCRUD;