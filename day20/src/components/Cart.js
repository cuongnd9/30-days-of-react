import React, { Component } from 'react';

class Cart extends Component {
  render() {
    var {children} = this.props;
    return (
      <section className="section">
          <div className="table-responsive table-bordered">
              <table className="table product-table">
                  <thead>
                      <tr>
                          <th></th>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total Price</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>{children}</tbody>
              </table>
          </div>
      </section>
    );
  }
}

export default Cart;
