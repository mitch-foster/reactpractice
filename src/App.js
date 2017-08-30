import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TasksCompleted from './components/TasksCompleted';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: ['clean', 'eat', 'code'],
      completedTasks: ['golf'],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  handleSubmit(e, task){
    e.preventDefault();
    const newTask = task.trim();
    if(newTask){
      let tasksState = [...this.state.tasks, newTask]
      this.setState({tasks: tasksState})
    }
  }
  completeTask(task, i){
    let newTasksState = [...this.state.tasks];
    const doneTask = newTasksState.splice(i,1);
    let newCompletedTasksState = [...this.state.completedTasks, doneTask] 
    this.setState({
      tasks: newTasksState,
      completedTasks: newCompletedTasksState
    })
  }
  deleteTask(task , i){
    let newTasksState = [...this.state.tasks];
    newTasksState.splice(i,1);
    this.setState({
      tasks: newTasksState,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>I'm the Task Master</h2>
        </div>
        <TaskForm handleSubmit={this.handleSubmit}/>
        <div style={{marginTop: '20px'}}>------------------------------------------------------------------------------------------</div>
        <TaskList tasks={this.state.tasks} completeTask={this.completeTask} deleteTask={this.deleteTask}/>
        <div style={{marginTop: '20px'}}>------------------------------------------------------------------------------------------</div>
        <TasksCompleted completedTasks={this.state.completedTasks}/>
      </div>
    );
  }
}

export default App;
