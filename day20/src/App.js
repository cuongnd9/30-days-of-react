import React, { Component } from 'react';
import Header from './components/Header';
import Showcase from './components/Showcase';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/*Showcase & Products*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="col-lg-10 offset-1">
                <Showcase/>
              </div>
              <ProductsContainer/>
            </div>
          </div>
        </div>

        {/*Message & Cart*/}
        <div className="container">
          <MessageContainer/>
          <CartContainer/>
        </div>

        <Footer/>

      </div>
    );
  }
}

export default App;
