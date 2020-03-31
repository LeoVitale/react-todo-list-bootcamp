import React from 'react';
import { useState } from 'react';
import {
  TodoItemContainer,
  LabelContainer,
  ButtonsContainer,
  EditContainer,
  EditInput,
  EditButton,
  DeleteButton,
  Label,
} from './styles';

import cross from '../../../../assets/img/cross.svg';
import pencil from '../../../../assets/img/pencil.svg';

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
    <TodoItemContainer
      style={{ display: todo.isHidden ? 'none' : 'block' }}
      className={` ${todo.completed ? 'completed' : ''}`}>
      {edit ? (
        <EditContainer>
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
        </EditContainer>
      ) : (
        <LabelContainer>
          <Label onClick={() => completeTodoItem(todo)}>
            {todo.value} - {todo.categ}
          </Label>

          <ButtonsContainer>
            <EditButton onClick={updateItem}>
              <img alt="edit" src={pencil} />
            </EditButton>
            <DeleteButton onClick={() => deleteTodoItem(todo)}>
              <img alt="delete" src={cross} />
            </DeleteButton>
          </ButtonsContainer>
        </LabelContainer>
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;
