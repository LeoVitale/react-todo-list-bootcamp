import React from 'react';
import { useState } from 'react';
import { Container, EditInput, EditButton, DeleteButton } from './styles';

const TodoItem = ({
  todo,
  completeTodoItem,
  updateTodoItem,
  deleteTodoItem,
}) => {
  const [taskName, setTaskName] = useState('');
  const [categ, setCateg] = useState('');
  const [edit, setEdit] = useState(false);
  //onClick={() => completeTodoItem(todo)}

  const onKeyPress = event => {
    if (event.key === 'Enter' && taskName !== '' && categ !== '') {
      updateTodoItem({ ...todo, value: taskName, categ });
      setCateg('');
      setTaskName('');
      setEdit(false);
    }
  };

  const updateItem = () => {
    setEdit(true);
    setTaskName(todo.value);
    setCateg(todo.categ);
  };

  return (
    <Container
      style={{ display: todo.isHidden ? 'none' : 'block' }}
      className={` ${todo.completed ? 'completed' : ''}`}>
      {edit ? (
        <div>
          <EditInput
            placeholder="Task"
            value={taskName}
            onKeyPress={onKeyPress}
            onChange={event => setTaskName(event.target.value)}
          />
          <EditInput
            placeholder="Category"
            value={categ}
            onKeyPress={onKeyPress}
            onChange={event => setCateg(event.target.value)}
          />
        </div>
      ) : (
        <div>
          <span onClick={() => completeTodoItem(todo)}>
            {todo.value} - {todo.categ}
          </span>

          <EditButton onClick={updateItem}>edit</EditButton>
          <DeleteButton onClick={() => deleteTodoItem(todo)}>
            delete
          </DeleteButton>
        </div>
      )}
    </Container>
  );
};

export default TodoItem;
