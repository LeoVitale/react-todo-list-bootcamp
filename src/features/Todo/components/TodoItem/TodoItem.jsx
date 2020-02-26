import React from 'react';

const TodoItem = ({ todo, completeTodoItem }) => {
  console.log('TodoItem', todo.value);
  return (
    <div
      onClick={() => completeTodoItem(todo)}
      style={{ display: todo.isHidden ? 'none' : 'block' }}>
      <span>
        {todo.value} - {todo.categ}
      </span>
      <span>{todo.completed ? '| finalizado' : ''}</span>
    </div>
  );
};

export default TodoItem;
