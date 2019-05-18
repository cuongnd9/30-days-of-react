import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var tasks = (state = initialState, action) => {
  var index = -1;
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      var newTask = {
        id: generateId(),
        name: action.task.name,
        status: action.task.status
      };
      state.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS:
      index = findIndex(action.id, state);
      var cloneTask = {...state[index]};
      cloneTask.status = !cloneTask.status;
      state[index] = cloneTask;
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    case types.DELETE:
      index = findIndex(action.id, state);
      state.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    case types.UPDATE:
      index = findIndex(action.id, state);
      state.splice(index, 1, action.task);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function generateId() {
  return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}

function findIndex(id, tasks) {
  var result = -1;
  tasks.forEach(function(element, index) {
    if (element.id === id) {
      result = index;
    }
  });
  return result;
}

export default tasks;
