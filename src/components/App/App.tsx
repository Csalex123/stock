import React, { useState } from 'react';
import '../../global.css';


import Header from '../Header';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import ProductForm, { ProductCreator } from '../Products/ProductForm';

import Products, { Product } from '../../shared/Table/Table.mockdata';

const headers: TableHeader[] = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price' },
    { key: 'stock', value: 'Available Stock', right: true },
]


function App() {

    const [products, setProducts] = useState(Products);
    
    const handleProductSubmit = (product: ProductCreator) => {
        setProducts([
            ...products,
            {   id: products.length + 1,
                ...product
            }
        ]);
    }

    const handleProductUpdate = (newProduct: Product) => {
  
        setProducts(products.map(product => 
            product.id === newProduct.id 
            ? newProduct
            : product
        ));
    }
    
    return (
        <div className="App">
            <Header title="Stock" />

            <Container>
                <Table
                    data={products}
                    headers={headers}
                />
                <ProductForm 
                    form={products[0]}
                    onSubmit={handleProductSubmit} 
                    onUpdate={handleProductUpdate}
                />
            </Container>

        </div>
    );
}

export default App;
