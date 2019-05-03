import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <div className="d-flex w-100 p-3 align-items-center rounded border my-3">
        <div className="d-flex align-items-center w-100 p-3">
          <img
            className="rounded-circle mr-3"
            alt="avatar"
            src="http://cdn.hoahoctro.vn/uploads/2018/10/5bc41f947aa93-1.jpg"
            width="80"
          />
          <div className="d-flex flex-column align-items-center">
            <small className="font-weight-light text-secondary m-0 p-0">An hour ago</small>
            <p className="font-weight-bold text-secondary">Ate lunch</p>
          </div>
        </div>
        <div className="d-flex flex-row-reverse w-100 p-3">
          <p>
            <span className="text-secondary mr-2">2</span>
            <i className="fas fa-comment text-secondary" />
          </p>
        </div>
      </div>
    );
  }
}

export default Content;
