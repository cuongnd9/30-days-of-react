import * as types from './../constants/ActionTypes';
export const listAll = () => {
  return {
    type: types.LIST_ALL
  }
}
export const addTask = task => {
  return {
    type: types.ADD_TASK,
    task
  }
};

export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  }
};

export const showForm = () => {
  return {
    type: types.SHOW_FORM
  }
};

export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  }
};

export const updateStatus = id => {
  return {
    type: types.UPDATE_STATUS,
    id
  }
};

export const deleteTask = id => {
  return {
    type: types.DELETE,
    id
  }
}

export const update = task => {
  return {
    type: types.UPDATE,
    task
  }
}

export const filterTable = filter => {
  return {
    type: types.FILTER_TABLE,
    filter
  }
}

export const search = keyword => {
  return {
    type: types.SEARCH,
    keyword
  }
}

export const sort = sort => {
  return {
    type: types.SORT,
    sort
  }
}
