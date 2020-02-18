import React from 'react';

const TodoItem = ({ todo, completeTodoItem }) => {
  return (
    <div onClick={() => completeTodoItem(todo)}>
      {todo.value} <span>{todo.completed ? '| finalizado' : ''}</span>
    </div>
  );
};

export default TodoItem;
