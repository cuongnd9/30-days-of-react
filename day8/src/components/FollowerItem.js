import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function FollowerItem({ username }) {
  const [follower, setFollower] = useState({});

  useEffect(() => {
    const url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setFollower(data))
      .catch(err => console.log('Error when fetching data...'));
  });

  return (
    <div className="d-flex w-100 p-3 align-items-center rounded border my-3">
      <div className="d-flex align-items-center w-100 p-3">
        <img
          className="rounded-circle mr-3"
          alt={follower.login}
          src={follower.avatar_url}
          width="80"
          height="80"
        />
        <div className="d-flex flex-column">
          <small className="font-weight-light text-secondary m-0 p-0">
            {follower.name}
          </small>
          <a
            className="font-weight-bold text-secondary"
            href={`https://github.com/${follower.login}`}
          >
            {follower.login}
          </a>
        </div>
      </div>
      <div className="d-flex flex-row-reverse w-100 p-3">
        <p>
          <span className="text-secondary mr-2" title="Repos">
            {follower.public_repos}
          </span>
          <i className="fab fa-github-alt text-secondary" title="Repos" />
        </p>
      </div>
    </div>
  );
}

FollowerItem.defaultProps = {
  username: 'cuongw'
};

FollowerItem.propTypes = {
  username: PropTypes.string
};

export default FollowerItem;
