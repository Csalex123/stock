import React from 'react';
import '../../global.css';


import Header from '../Header';
import Container from '../../shared/Container';
import Table from '../../shared/Table';
import Form from '../../shared/Form';
import Input from '../../shared/Input';
import Button from '../../shared/Button';


function App() {

  return (
    <div className="App">
      <Header title="Stock" />

      <Container>
        <Table />
        <Form title="Product Form" onSubmit={console.log}>
          <Input label="Name" placeholder="E.g: Cookie" />
          <Input label="Price" type="number" step="0.01" min="0" placeholder="E.g: 1.25" />
          <Input label="Stock" type="number" min="0" placeholder="E.g: 15" />
          <Button>Enviar</Button>
        </Form>
      </Container>

    </div>
  );
}

export default App;
