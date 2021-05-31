import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
  render(){
    return (
      <>
        {
          this.props.todos.map(todo => {
            console.log(todo);
            return (
              <Todo
                key={todo.id}
                todo={todo}
                toggleCompleted={this.props.toggleCompleted}
              />
            );
          })
        }
        <TodoForm addTodo={this.props.addTodo}/>
      </>
    );
  }
}

export default TodoList;
