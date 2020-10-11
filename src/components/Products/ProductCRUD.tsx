import React, { useState, useCallback, useEffect } from 'react';
import Swal from 'sweetalert2';

import Table, { TableHeader } from '../../shared/Table';
import { Product } from '../../shared/Table/Table.mockdata';
import ProductForm, { ProductCreator } from './ProductForm';
import { useSelector, useDispatch } from 'react-redux';
import * as ProductActions from '../../redux/Products/Products.actions'
import { RootState } from '../../redux/store';

const headers: TableHeader[] = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price' },
    { key: 'stock', value: 'Available Stock', right: true },
]

const ProductCRUD = () => {
    const dispatch = useDispatch();
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>();

    const products = useSelector<RootState>(state => {
        return state.product;
    })

    async function fetchData() {
        try {
            await dispatch(ProductActions.getProducts());
        } catch (err) {
            Swal.fire('Opps!', err.message, 'error');
        }
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const handleProductSubmit = async (product: ProductCreator) => {
        try {
            await dispatch(ProductActions.insertNewProduct(product));
        } catch (err) {
            Swal.fire('Opps!', err.message, 'error');
        }

    }

    const handleProductUpdate = async (newProduct: Product) => {

        try {
            await dispatch(ProductActions.updateProducts(newProduct))
            setUpdatingProduct(undefined);
        } catch (err) {
            Swal.fire('Oops!', err.message, 'error');
        }

    }

    const handleProductEdit = (product: Product) => {
        setUpdatingProduct(product);
    }

    const handleProductDetail = useCallback((product: Product) => {

        Swal.fire(
            'Product detail',
            `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            'info'
        )
    }, []);

    const deleteProduct = async (id: string) => {
        try {
            await ProductActions.deleteProduct(id);
            Swal.fire('Unhul!', 'Product successfully deleted', 'success');
        } catch (err) {
            Swal.fire('Opps!', err.message, 'error');
        }

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
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(product._id);
            }
        })
    }

    return <>
        <Table
            data={products}
            headers={headers}
            enableActions
            onDelete={handleProductDelete}
            onDetail={handleProductDetail}
            onEdit={handleProductEdit}

        />
        <ProductForm
            form={updatingProduct}
            onSubmit={handleProductSubmit}
            onUpdate={handleProductUpdate}
        />
    </>
}

export default ProductCRUD;