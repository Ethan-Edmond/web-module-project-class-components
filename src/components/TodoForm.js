import React from "react";

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      title: ""
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  }
  handleAdd = (e) => {
    this.props.addTodo(this.state.title);
  }
  handleClear = (e) => {
    this.props.clearCompleted();
  }
  render(){
    return (
      <>
        <input onChange={this.handleChange} placeholder="todos go here" type="text"/>
        <button onClick={this.handleAdd}>Add Todo</button>
        <button onClick={this.handleClear}>Clear Completed</button>
      </>
    );
  }
}

export default TodoForm;
