import React from 'react';
import '../../global.css';


import Header from '../Header';
import Container from '../../shared/Container';
import Table, { TableHeader  } from '../../shared/Table';
import ProductForm from '../Products/ProductForm';

import Products from '../../shared/Table/Table.mockdata';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price' },
  { key: 'stock', value: 'Available Stock', right: true },
]

function App() {
  return (
    <div className="App">
      <Header title="Stock" />

      <Container>
        <Table data={Products} headers={headers}   />
        <ProductForm />
      </Container>

    </div>
  );
}

export default App;
