import React from 'react';

import Header from '../components/Header';
import ProductCRUD from '../components/Products/ProductCRUD';
import Container from '../shared/Container';


const HomeView = () => {
    return (
        <>
            <Header title="Stock" />

            <Container>
                <ProductCRUD />
            </Container>
        </>
    );
}

export default HomeView;
