import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
  render(){
    return (
      <div className="app-form">
        <div className="todo-container">
        {
          this.props.todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                toggleCompleted={this.props.toggleCompleted}
              />
            );
          })
        }
        </div>
        <TodoForm
          clearCompleted={this.props.clearCompleted}
          addTodo={this.props.addTodo}/>
      </div>
    );
  }
}

export default TodoList;
