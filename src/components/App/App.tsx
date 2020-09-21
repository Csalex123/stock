import React from 'react';
import '../../global.css';


import Header from '../Header';
import Container from '../../shared/Container';
import Table from '../../shared/Table';
import ProductForm from '../Products/ProductForm';

function App() {
  return (
    <div className="App">
      <Header title="Stock" />

      <Container>
        <Table />
        <ProductForm />
      </Container>

    </div>
  );
}

export default App;
