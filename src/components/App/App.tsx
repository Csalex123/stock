import React from 'react';

import Header from '../Header';

import '../../global.css';
import Button from '../Button';

// function TestComponent() {
//   return <div>Componente de teste.</div>
// }

function App() {
  return (
    <div className="App">
      <Header title="Stock" />

      <div className="container">
      
        <Button
          // testComponent={<TestComponent />}
          onClick={() => window.alert('teste')}>
          Botão 1
        </Button>
      </div>

    </div>
  );
}

export default App;
