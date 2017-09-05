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
      tasks: [],
      completedTasks: [],
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>I'm the Task Master</h2>
        </div>
        <TaskForm/>
        <div style={{marginTop: '20px'}}>------------------------------------------------------------------------------------------</div>
        <TaskList/>
        <div style={{marginTop: '20px'}}>------------------------------------------------------------------------------------------</div>
        <TasksCompleted/>
      </div>
    );
  }
}

export default App;
