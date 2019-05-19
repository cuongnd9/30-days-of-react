import React, { Component } from 'react';

class CartResult extends Component {
  render() {
    var {totalPrice} = this.props;
    return (
      <tr>
          <td colSpan="3"></td>
          <td>
              <h4>
                  <strong>Total Price</strong>
              </h4>
          </td>
          <td>
              <h4>
                  <strong>${totalPrice}</strong>
              </h4>
          </td>
          <td colSpan="3">
              <button type="button" className="btn btn-danger waves-effect waves-light">Complete purchase
                  <i className="fa fa-angle-right right"></i>
              </button>
          </td>
      </tr>
    );
  }
}

export default CartResult;
