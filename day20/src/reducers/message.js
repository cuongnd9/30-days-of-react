import * as types from './../constants/ActionTypes';
import * as messages from './../constants/Messages';

var initialState = messages.MSG_WELLCOME;

const message = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default message;
