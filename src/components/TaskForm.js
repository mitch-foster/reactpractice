import React, { Component } from 'react';
import { connect } from 'react-redux';
import addTask from './../ducks/taskList';

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      changeClass: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const newTask = this.state.inputValue.trim();
    console.log('newTask:', newTask)
    if(newTask){
      this.props.addTask(newTask)
      this.setState({
        inputValue: '', 
        changeClass: !this.state.changeClass
      })
    }
  }
  render() {
    return (
      <div className={`${this.state.changeClass ? 'teal' : 'turquoise'}`}>
        <h1>Add a new Task</h1>
        <form>
          <input  onChange={(e)=> {this.setState({ inputValue: e.target.value })}} 
                  placeholder='New Task' 
                  value={this.state.inputValue}
          />
          <button onClick={this.handleSubmit}>
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addTask })(TaskForm);