import store from '../store';

export const fetchPost = () => ({
  type: 'FETCH_USER'
});

export const receivePost = post => ({
  type: 'RECEIVE_POST',
  data: post
});

export const receiveError = () => ({
  type: 'RECEIVE_ERROR'
});

export  const thunkActionCreator = username => {
  const user = username.replace(/\s/g, "");
  store.dispatch(fetchPost());
  return function (dispatch, getState) {
    return fetch(`https://api.github.com/users/${user}`)
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No such user found!!");
        } else dispatch(receivePost(data));
      })
      .catch(err => dispatch(receiveError()));
  }
};
