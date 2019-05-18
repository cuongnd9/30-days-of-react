import * as types from './../constants/ActionTypes';

var initialState = false;

var isDisplayForm = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FORM:
      return !state;
    case types.SHOW_FORM:
      return state = true;
    case types.CLOSE_FORM:
      return state = false;
    default:
      return state;
  }
}

export default isDisplayForm;
