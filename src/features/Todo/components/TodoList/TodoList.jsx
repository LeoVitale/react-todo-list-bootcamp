import React from 'react';
import TodoItem from '../TodoItem';
import './styles.css';

const TodoList = ({ todos = [], completeTodoItem }) => {
  // console.log('TodoList');

  if (todos.length === 0) {
    return null;
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeTodoItem={completeTodoItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
