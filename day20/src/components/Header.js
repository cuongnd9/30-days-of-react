import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="https://github.com/ndc07">DUCATI</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="https://github.com/ndc07">HOME
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/ndc07">MONSTER</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/ndc07">SCRAMBLER</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/ndc07">MULTISTRADA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/ndc07">PANIGALE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/ndc07">SUPERSPORT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/ndc07">SERVICE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/ndc07">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
