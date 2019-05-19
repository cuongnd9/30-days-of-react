import React, { Component } from 'react';
import { connect} from "react-redux";
import UserInfo from './UserInfo';
import { thunkActionCreator } from './actions/fetchAction';

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = this.getUsername.value;
    this.props.dispatch(thunkActionCreator(username));
    this.getUsername.value = "";
  };

  render() {
    const { isFetching, isError, userData } = this.props.data;
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='form'>
          <h2 className='title'>Enter the Github username</h2>
          <input
            type="text"
            placeholder="Enter Github username"
            required
            ref={input => (this.getUsername = input)}
          />
          <button className="button">Submit</button>
        </form>
        {isFetching ? <h3>Loading...</h3> : null}
        {isError ? <h3>No such user exists.</h3> : null}
        {Object.keys(userData).length > 0 ? (
          <UserInfo user={userData}/>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps)(App);
