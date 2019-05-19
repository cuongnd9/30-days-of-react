import React, { Component } from 'react';

class Products extends Component {
  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    );
  }
}

export default Products;
