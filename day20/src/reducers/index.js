import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import message from './message';

var rootReducer = combineReducers({
  products,
  cart,
  message
});

export default rootReducer;
