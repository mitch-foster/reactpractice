import { createStore } from 'redux';
import taskReducer from './taskList';

export default createStore(taskReducer);