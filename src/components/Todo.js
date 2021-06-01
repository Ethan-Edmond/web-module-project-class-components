import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  handleClick = (e) => {
    this.props.toggleCompleted(this.props.todo.id);
  }
  render(){
    return (
      <div
        onClick={this.handleClick}
        className={(this.props.todo.completed) ? "completed todo" : "todo"}
      >
        <h4>{this.props.todo.task}</h4>
      </div>
    );
  }
}

export default Todo;
