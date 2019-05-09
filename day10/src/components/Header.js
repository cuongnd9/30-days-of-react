import React, { useState } from 'react';
import classNames from 'classnames';

function Header({ title }) {
  const [isInputVisible, setInputVisible] = useState(false);
  const inputClassNames = classNames({
    'fa text-white': true,
    'fa-search': !isInputVisible,
    'fa-times': isInputVisible
  });

  return (
    <div
      className="d-flex w-100 p-4 justify-content-center align-items-center rounded"
      style={{
        backgroundImage: 'linear-gradient(to right, #5970ff, #d359ff)',
        height: '86px'
      }}
    >
      <div className="d-flex w-100 align-items-center">
        <i className="fas fa-align-left text-white" />
      </div>
      <h5 className="text-white font-weight-light">{title}</h5>
      <div className="d-flex flex-row-reverse w-100 align-items-center">
        <i
          className={inputClassNames}
          onClick={() => setInputVisible(!isInputVisible)}
          style={{ cursor: 'pointer' }}
        />
        {isInputVisible && (
          <input
            type="text"
            className="form-control w-75 mr-3"
            style={{ transition: '250ms all ease-in-out' }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
