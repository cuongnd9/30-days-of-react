import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="bg-info d-flex w-100 p-3 justify-content-center align-items-center rounded">
        <div className='d-flex w-100 align-items-center'>
          <i className="fas fa-align-left text-white" />
        </div>
        <h5 className="text-white font-weight-light">Timeline</h5>
        <div className='d-flex flex-row-reverse w-100 align-items-center'>
          <i className="fa fa-search searchIcon text-white" />
        </div>
      </div>
    );
  }
}

export default Header;
