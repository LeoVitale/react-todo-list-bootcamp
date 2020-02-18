import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// Todo
/*

1 - Escrever um form que ao ser inputado um 
texto e pressionar Enter, o texto será inserido em uma lista

2 - Criar um Componente de Lista para receber os Itens do Todo

3 - Criar o Componente de Item

4 - Marcar o Item como concluido

*/

class Todo extends Component {
  state = {
    title: 'Meu primeiro Todo List',
    todos: []
  };

  createNewTodo = value => {
    const prevTodos = [...this.state.todos];
    const newTodo = {
      id: Date.now(),
      value: value,
      completed: false
    };

    this.setState({ todos: [newTodo, ...prevTodos] });
  };

  completeTodoItem = selectedTodo => {
    const { todos } = this.state;

    const newTodos = todos.map(todo => {
      if (todo.id === selectedTodo.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });

    this.setState({ todos: newTodos });
  };

  render() {
    const { todos, title } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <TodoForm createNewTodo={this.createNewTodo} />
        <TodoList
          todos={todos}
          title='Meu Todo List'
          completeTodoItem={this.completeTodoItem}
        />
      </div>
    );
  }
}

export default Todo;
