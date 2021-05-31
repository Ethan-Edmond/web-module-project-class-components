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
    e.preventDefault();
    if (this.state.title !== ""){
      this.props.addTodo(this.state.title);
    }
  }
  handleClear = (e) => {
    this.props.clearCompleted();
  }
  render(){
    return (
      <>
        <form onSubmit={this.handleAdd}>
          <input
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="todos go here"
            type="text"
          />
          <button>Add Todo</button>
        </form>
        <button onClick={this.handleClear}>Clear Completed</button>
      </>
    );
  }
}

export default TodoForm;
