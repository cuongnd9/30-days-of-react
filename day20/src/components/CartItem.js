import React, { Component } from 'react';
import * as messages from './../constants/Messages';

class CartItem extends Component {
  onDelete = product => {
    this.props.onDelete(product);
    this.props.onChangeMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }

  onUpdate = (product, quantity, type) => {
    quantity = type ? quantity + 1 : quantity -1;
    if (quantity === product.inventory + 1)  quantity--;
    if (quantity === 0)  quantity++;
    this.props.onUpdateProduct(product, quantity);
    this.props.onChangeMessage(messages.MSG_UPDATE_TO_CART_SUCCESS);
  }

  render() {
    var {product, quantity} = this.props.cartItem;
    return (
      <tr>
          <th scope="row">
              <img width="400" alt="" src={product.image} />
          </th>
          <td className="align-middle">
              <h5>
                  <strong>{product.name}</strong>
              </h5>
          </td>
          <td className="align-middle">${product.price}</td>
          <td className="center-on-small-only align-middle">
              <span className="mr-2">{quantity}</span>
              <div className="btn-group radio-group" data-toggle="buttons">
                  <label className="btn btn-sm btn-info btn-rounded" onClick={ () => this.onUpdate(product, quantity, 0) }>
                      <a href="https://github.com/ndc07">
                        <i className="material-icons">remove</i>
                      </a>
                  </label>
                  <label className="btn btn-sm btn-info btn-rounded" onClick={ () => this.onUpdate(product, quantity, 1) }>
                      <a href="https://github.com/ndc07">
                        <i className="material-icons">add</i>
                      </a>
                  </label>
              </div>
          </td>
          <td className="align-middle">${product.price * quantity}</td>
          <td className="align-middle">
              <button
                type="button"
                className="btn btn-sm btn-danger"
                data-toggle="tooltip" data-placement="top"
                data-original-title="Remove item"
                onClick={ () => this.onDelete(product)}
                >
                  <i className="material-icons">delete</i>
              </button>
          </td>
      </tr>
    );
  }
}

export default CartItem;
