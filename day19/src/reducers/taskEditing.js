import * as types from './../constants/ActionTypes';

var initialState = {
  id: '',
  name: '',
  status: false
};

var taskEditing = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE:
      state = action.task;
      return {...state};
    case types.CLOSE_FORM:
      state = {
        id: '',
        name: '',
        status: false
      };
      return {...state};
    default:
      return state;
  }
}

export default taskEditing;
