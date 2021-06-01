import React from 'react';
import TodoList from "./components/TodoList";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = (title) => {
    const newTodo = {
      task: title,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return (todo.id === id) ? {...todo, completed: !todo.completed} : todo;
      })
    });
  }
  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>The Big Todo</h1>
        <TodoList
          clearCompleted={this.clearCompleted}
          toggleCompleted={this.toggleCompleted}
          addTodo={this.addTodo}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
