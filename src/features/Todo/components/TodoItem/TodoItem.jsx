import React from 'react';
import './styles.css';

const TodoItem = ({ todo, completeTodoItem }) => {
  // console.log('TodoItem', todo.value);
  return (
    <div
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={() => completeTodoItem(todo)}
      style={{ display: todo.isHidden ? 'none' : 'block' }}>
      <span>
        {todo.value} - {todo.categ}
      </span>
    </div>
  );
};

export default TodoItem;
