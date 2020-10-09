import React from 'react';
import '../../global.css';

import Header from '../Header';
import Container from '../../shared/Container';
import ProductCRUD from '../Products/ProductCRUD';


function App() {
   

    return (
        <div className="App">
            <Header title="Stock" />

            <Container>
                <ProductCRUD />
            </Container>

        </div>
    );
}

export default App;
