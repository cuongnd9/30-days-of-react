import * as types from './../constants/ActionTypes';

var initialState = {
  name: '',
  status: -1// -1: all, 1: active, 0: hiden
};

var filterTable = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_TABLE:
      state = {
        name: action.filter.name,
        status: parseInt(action.filter.status, 10)
      };
      return {...state};
    default:
      return state;
  }
}

export default filterTable;
