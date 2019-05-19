const initialState = {
  userData: {},
  isFetching: false,
  isError: false
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return {
        ...state,
        isFetching: true,
        userData: {},
        isError: false
      };
    case 'RECEIVE_POST':
      return {
        ...state,
        userData: action.data,
        isFetching: false,
        isError: false
      };
    case 'RECEIVE_ERROR':
      return {
        ...state,
        isError: true,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default asyncReducer;
