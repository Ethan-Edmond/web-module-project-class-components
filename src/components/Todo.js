import React from "react";

class Todo extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.todo.task}</h1>
      </div>
    );
  }
}

export default Todo;
