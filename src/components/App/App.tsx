import React from 'react';
import TestComponent from '../TestComponent';
import ClassComponent from '../ClassComponent';

function App() {
  return (
    <div className="App">
      <TestComponent name="Isso é uma props" />
      <ClassComponent name="Classe" />
    </div>
  );
}

export default App;
