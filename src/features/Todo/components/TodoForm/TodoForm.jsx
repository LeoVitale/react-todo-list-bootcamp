import React from 'react';

/* - Escrever uma função que quando eu pressionar 
ENTER, vamos adicionar o texto a lista 'todos'
*/

const TodoForm = ({ createNewTodo }) => {
  // Trabalhar com estado dentro desse componente
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      createNewTodo(event.target.value);
    }
  };

  return (
    <div>
      <input type='text' onKeyPress={onKeyPress} />

      <input type='text' onKeyPress={onKeyPress} />
    </div>
  );
};

export default TodoForm;
