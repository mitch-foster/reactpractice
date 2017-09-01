const ADD_TASK = 'ADD_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const DELETE_TASK = 'DELETE_TASK';

const initialState = {
  tasksToDo: ['cook', 'clean', 'eat'],
  tasksCompleted: ['code']
}

export default function reducer(state = initialState, action){
  console.log('action:',action)
  switch(action.type){
    case ADD_TASK:
      return Object.assign({}, state, {tasksToDo: [...state.tasksToDo, action.payload]});
    default:
      return state;
  }
}

export function addTask(task){
  return {
    type: ADD_TASK,
    payload: task
  }
}


