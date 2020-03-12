import React, { useState } from 'react';
import TextInput from '../../../../ui/TextInput';
import './styles.css';

/* - Escrever uma função que quando eu pressionar 
ENTER, vamos adicionar o texto a lista 'todos'
*/

const TodoForm = ({ createNewTodo, addNewCateg }) => {
  // Trabalhar com estado dentro desse componente
  const [taskName, setTaskName] = useState('');
  const [categ, setCateg] = useState('');

  const onKeyPress = event => {
    if (event.key === 'Enter' && taskName !== '' && categ !== '') {
      createNewTodo({ text: taskName, categ });
      addNewCateg(categ);
      setCateg('');
      setTaskName('');
    }
  };

  console.log('TodoForm');

  return (
    <div className="todo-form">
      <TextInput
        label="Task Description"
        type="text"
        value={taskName}
        onKeyPress={onKeyPress}
        onChange={event => setTaskName(event.target.value)}
        required
      />
      <TextInput
        label="Category"
        type="text"
        value={categ}
        onKeyPress={onKeyPress}
        onChange={event => setCateg(event.target.value)}
        required
      />
    </div>
  );
};

export default TodoForm;
