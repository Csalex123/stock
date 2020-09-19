import React from 'react';

import Header from '../Header';

import '../../global.css';
import Button from '../../shared/Button';
import Container from '../../shared/Container';

// function TestComponent() {
//   return <div>Componente de teste.</div>
// }

function App() {
  return (
    <div className="App">
      <Header title="Stock" />

      <Container>

        <Button
          // testComponent={<TestComponent />}
          onClick={() => window.alert('teste')}>
          Botão 1
        </Button>
      </Container>

    </div>
  );
}

export default App;
