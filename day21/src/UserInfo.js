import React from 'react';

const UserInfo = props => {
  const { name, avatar_url, bio, location, public_repos,followers, following } = props.user;
  return (
    <div className="user-info">
      <div className="avatar">
        <img src={avatar_url} alt="avatar" width="250px" />
      </div>
      <div className="content">
        <h1>{name}</h1>
        <p>
          <strong>Bio: </strong>
          {bio}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Repositories:</strong> {public_repos}
        </p>
        <p>
          <strong>Followers:</strong> {followers}
        </p>
        <p>
          <strong>Following:</strong> {following}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
