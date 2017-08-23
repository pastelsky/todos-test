import React, { Component } from 'react';
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    todoList: [{
      text: 'Buy grocery',
      timestamp: 1,
    },
    {
      text: 'Buy milk',
      timestamp: 2,
    }]
  }

  handleAddTodo = (todoText) => {
    const newTodo = {
      text: todoText,
      timestamp: Date.now(),
    }

    this.setState({ todoList: this.state.todoList.concat(newTodo) })
  }

  render() {
    const { todoList } = this.state

    return (
      <div className="App">
        <TodoInput onAddTodo={ this.handleAddTodo }/>
        <TodoList 
          todos={ todoList }
        />
      </div>
    );
  }
}

export default App;
