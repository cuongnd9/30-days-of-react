import React, { Component } from 'react';
import * as messages from './../constants/Messages';

class Product extends Component {
  render() {
    var {product} = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="https://github.com/ndc07"><img className="card-img-top" src={product.image} alt={product.name}/></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="https://github.com/ndc07">{product.name}</a>
            </h4>
            <h5>${product.price}</h5>
            <p className="card-text">{product.description}</p>
          </div>
          <div className="card-footer text-center">
            {this.showRating(product.rating)}
            <div className="btn-group center-block" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-danger" onClick={() => this.onAddToCart(product)}>Add to cart</button>
              <button type="button" className="btn btn-seconary">More details</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onAddToCart = product => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(messages.MSG_ADD_TO_CART_SUCCESS);
  }

  showRating(rating) {
    var result = '';
    for (let i = 0; i < rating; i++) {
      result += '★ ';
    }
    for (let i = 0; i < 5 - rating; i++) {
      result += '☆ ';
    }
    return <p className="text-muted">{result}</p>;
  }
}

export default Product;
