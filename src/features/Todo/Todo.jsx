import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { pluralize } from '../../helpers/utils';

// Todo
/*

1 - Escrever um form que ao ser inputado um 
texto e pressionar Enter, o texto será inserido em uma lista

2 - Criar um Componente de Lista para receber os Itens do Todo

3 - Criar o Componente de Item

4 - Marcar o Item como concluido

5 - Filtros (All, Completed, Active)

6 - Clear Completed

7 - Select com os tipos de Task

8 - Contador

*/

class Todo extends Component {
  state = {
    title: 'Meu primeiro Todo List',
    todos: [],
    originalTodos: [],
    categs: [],
  };

  createNewTodo = value => {
    const prevTodos = [...this.state.todos];
    const newTodo = {
      id: Date.now(),
      value: value.text,
      completed: false,
      isHidden: false,
      categ: value.categ,
    };

    this.setState({ todos: [newTodo, ...prevTodos] });
  };

  completeTodoItem = selectedTodo => {
    const { todos } = this.state;

    const newTodos = todos.map(todo => {
      if (todo.id === selectedTodo.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    this.setState({ todos: newTodos });
  };

  showAll = () => {
    const { todos } = this.state;
    const activesTodos = todos.map(todo => {
      return {
        ...todo,
        isHidden: false,
      };
    });

    this.setState({ todos: [...activesTodos] });
  };

  showActives = () => {
    const { todos } = this.state;
    const activesTodos = todos.map(todo => {
      if (todo.completed) {
        return {
          ...todo,
          isHidden: true,
        };
      }
      return {
        ...todo,
        isHidden: false,
      };
    });

    this.setState({ todos: [...activesTodos] });
  };

  showCompleteds = () => {
    const { todos } = this.state;
    const activesTodos = todos.map(todo => {
      if (todo.completed) {
        return {
          ...todo,
          isHidden: false,
        };
      }
      return {
        ...todo,
        isHidden: true,
      };
    });

    this.setState({ todos: [...activesTodos] });
  };

  clearCompleteds = () => {
    const { todos } = this.state;
    const activesTodos = todos.filter(todo => !todo.completed);

    this.setState({ todos: [...activesTodos] });
  };

  addNewCateg = categ => {
    // completar lógica para adicionar categorias
    const prevCategs = this.state.categs;
    if (prevCategs.includes(categ)) {
      return;
    }
    this.setState({ categs: [...prevCategs, categ] });
  };

  filterByCateg = categ => {
    // completar lógica para filtrar tasks por categoria
    const { todos } = this.state;
    const activesTodos = todos.map(todo => {
      if (todo.categ === categ) {
        return {
          ...todo,
          isHidden: false,
        };
      }
      return {
        ...todo,
        isHidden: true,
      };
    });

    this.setState({ todos: [...activesTodos] });
  };

  render() {
    const { todos, title, categs } = this.state;
    const todosCount = todos.filter(todo => !todo.isHidden);
    console.log('Todo');

    return (
      <div>
        <h1>{title}</h1>
        <span>
          <select onChange={event => this.filterByCateg(event.target.value)}>
            <option>selecione</option>
            {categs.map(categ => (
              <option key={Date.now()} value={categ}>
                {categ}
              </option>
            ))}
          </select>
          <TodoList
            todos={todos}
            title="Meu Todo List"
            completeTodoItem={this.completeTodoItem}
          />
          <TodoForm
            createNewTodo={this.createNewTodo}
            addNewCateg={this.addNewCateg}
          />
        </span>

        <div>{pluralize(todosCount, 'Item', 'Items')} </div>
        <span>
          <button onClick={this.showAll}>All</button>
          <button onClick={this.showActives}>Actives</button>
          <button onClick={this.showCompleteds}>Completed</button>
          <button onClick={this.clearCompleteds}>Clear Completeds</button>
        </span>
      </div>
    );
  }
}

export default Todo;
