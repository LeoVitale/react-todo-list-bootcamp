import React from 'react';
import './App.css';
import Todo from './features/Todo';

// O que é React
// - Não Opinativo
// - "Reativa"
// - Declarativo
// - Baseado em Componentes
// - Beseado em controle de Estado

function App() {
  return (
    <div className='App'>
      <Todo />
    </div>
  );
}

export default App;
