import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  handleClick = (e) => {
    this.props.toggleCompleted(this.props.todo.id);
  }
  render(){
    return (
      <div onClick={this.handleClick} className={(this.props.todo.completed) ? "completed" : ""}>
        <h1>{this.props.todo.task}</h1>
      </div>
    );
  }
}

export default Todo;
