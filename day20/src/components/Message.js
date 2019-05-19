import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <h3 className="bg-success">
          {this.props.children}
      </h3>
    );
  }
}

export default Message;
