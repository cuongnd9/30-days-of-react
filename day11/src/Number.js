import React, { PureComponent } from 'react';

export default class extends PureComponent {
  render() {
    return (
      <div
        style={{
          borderRadius: '10px',
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px',
          display: 'inline-block'
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
