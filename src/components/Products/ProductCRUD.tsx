import React, { useState, useEffect, useCallback } from 'react';
import Swal from 'sweetalert2';

import {
    createSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
} from '../../services/Products.service';
import Table, { TableHeader } from '../../shared/Table';
import { Product } from '../../shared/Table/Table.mockdata';
import ProductForm, { ProductCreator } from './ProductForm';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, insertNewProduct } from '../../redux/Products/Products.actions'

const headers: TableHeader[] = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price' },
    { key: 'stock', value: 'Available Stock', right: true },
]

declare interface ProductsCRUDProps {

}

const ProductCRUD: React.FC<ProductsCRUDProps> = (props) => {
    const dispatch = useDispatch();
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>();

    const products = useSelector<any>(state => {
        return state.product;
    })

    async function fetchData() {
        dispatch(getProducts())
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleProductSubmit = async (product: ProductCreator) => {
        try {
            dispatch(insertNewProduct(product));
            // await createSingleProduct(product);
            // fetchData();
        } catch (err) {
            Swal.fire('Opps!', err.message, 'error');
        }

    }

    const handleProductUpdate = async (newProduct: Product) => {

        try {
            await updateSingleProduct(newProduct);
            setUpdatingProduct(undefined);
            fetchData();
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
            await deleteSingleProduct(id);
            fetchData();
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