import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Button from '../../ui/Button';
import { pluralize } from '../../helpers/utils';

import './styles.css';
import Select from '../../ui/Select';
import { getTasks, postTask, updateTask, deleteTask } from '../../api';

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
const myStyles = { display: 'none', backgroundColor: 'red' };
class Todo extends Component {
  state = {
    categsCount: {},
    title: 'My Personal Task List',
    todos: [],
    originalTodos: [],
    categs: [],
  };

  componentDidMount() {
    // Método GET

    getTasks().then(response => {
      // let categs = [];
      // for (let index = 0; index < response.data.length; index++) {
      //   const todo = response.data[index];
      //   categs.push(todo.categ);
      // }

      // response.data.forEach(todo => {
      //   categs.push(todo.categ);
      // });
      let categsCount = {};
      const categs = response.data.map(todo => todo.categ);

      response.data.forEach(todo => {
        console.log(todo);

        //BUG no state (26/03):
        categsCount = { ...categsCount, ...this.categSumCount(todo.categ) };
      });

      console.log(categsCount);

      this.setState({
        todos: response.data,
        categs,
        //verificar se sera undefined
        categsCount: categsCount || {},
      });
    });
  }

  /* const count = {
    animal: 0,
    categ1: 0
  }*/
  categSumCount = categ => {
    const { categsCount } = this.state;
    const count = {
      ...categsCount,
      [categ]: categsCount[categ] >= 0 ? categsCount[categ] + 1 : 1,
    };
    return count;
  };

  categSubCount = categ => {
    const { categsCount } = this.state;
    const count = {
      ...categsCount,
      [categ]: categsCount[categ] > 0 ? categsCount[categ] - 1 : 0,
    };
    return count;
  };

  createNewTodo = value => {
    const prevTodos = [...this.state.todos];
    const newTodo = {
      value: value.text,
      completed: false,
      isHidden: false,
      categ: value.categ,
    };
    const categsCount = this.categSumCount(value.categ);

    postTask(newTodo).then(response =>
      console.log(
        `A Tarefa ${response.data.value} foi adicionada com sucesso!`,
      ),
    );

    this.setState({
      todos: [{ ...newTodo, id: Date.now() }, ...prevTodos],
      categsCount,
    });
  };

  completeTodoItem = selectedTodo => {
    const { todos } = this.state;
    const newTodo = { ...selectedTodo, completed: !selectedTodo.completed };
    const newTodos = todos.map(todo =>
      todo.id === selectedTodo.id ? newTodo : todo,
    );

    updateTask(newTodo).then(response => {
      console.log(
        `A Tarefa ${response.data.value} foi atualizada com sucesso!`,
      );
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
      return {
        ...todo,
        isHidden: todo.completed,
      };
    });

    this.setState({ todos: [...activesTodos] });
  };

  showCompleteds = () => {
    const { todos } = this.state;
    const activesTodos = todos.map(todo => {
      return {
        ...todo,
        isHidden: !todo.completed,
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
      return {
        ...todo,
        isHidden: !(todo.categ === categ),
      };
    });
    // const uniqueTodo = new Set(activesTodos);
    // const backTodo = [...uniqueTodo];

    this.setState({ todos: [...activesTodos] });
  };

  updateTodoItem = task => {
    const { todos } = this.state;
    const newTodo = { ...task };
    const newTodos = todos.map(todo => (todo.id === task.id ? newTodo : todo));
    updateTask(task).then(response => {
      console.log(`A Tarefa ${response.data.id} foi atualizada com sucesso!`);
    });

    this.setState({ todos: [...newTodos] });
  };

  deleteTodoItem = task => {
    const { todos, categs } = this.state;
    const categsCount = this.categSubCount(task.categ);
    const newTodos = todos.filter(todo => todo.id !== task.id);

    const newCategs = categs.filter(
      categ => categ !== task.categ && categsCount[categ] > 0,
    );

    deleteTask(task).then(response => {
      console.log(`A Tarefa ${response.data.id} foi removida com sucesso!`);
    });
    this.setState({
      todos: [...newTodos],
      categs: [...newCategs],
      categsCount,
    });
  };

  render() {
    const { todos, title, categs, categsCount } = this.state;
    const todosCount = todos.filter(todo => !todo.isHidden);
    console.log(this.state);

    return (
      <div className="todo">
        <h1>{title}</h1>
        <Select
          options={categs}
          onChange={event => this.filterByCateg(event.target.value)}
        />

        <TodoForm
          createNewTodo={this.createNewTodo}
          addNewCateg={this.addNewCateg}
        />

        <TodoList
          todos={todos}
          title="Meu Todo List"
          completeTodoItem={this.completeTodoItem}
          updateTodoItem={this.updateTodoItem}
          deleteTodoItem={this.deleteTodoItem}
        />

        <div className="todo-count">
          {pluralize(todosCount, 'Item', 'Items')}{' '}
        </div>

        <span className="button-container">
          <Button onClick={this.showAll}>All</Button>
          <Button onClick={this.showActives}>Actives</Button>
          <Button onClick={this.showCompleteds}>Completed</Button>
          <Button onClick={this.clearCompleteds}>Clear Completeds</Button>
        </span>
      </div>
    );
  }
}

export default Todo;
