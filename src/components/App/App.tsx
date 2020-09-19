import React, { useState } from 'react';

import Header from '../Header';

import '../../global.css';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Input from '../../shared/Input';

// function TestComponent() {
//   return <div>Componente de teste.</div>
// }

function App() {
  const [street, setStreet] = useState('');

  return (
    <div className="App">
      <Header title="Stock" />

      <Container>

        <Button
          // testComponent={<TestComponent />}
          onClick={() => window.alert('teste')}>
          Botão 1
        </Button>
        <Input
          label="Street"
          placeholder="Ex.: 15h Avenue"
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
      </Container>

    </div>
  );
}

export default App;
