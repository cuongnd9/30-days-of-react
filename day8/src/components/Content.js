import React, { useState, useEffect } from 'react';
import FollowerItem from './FollowerItem';

function Content() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/cuongw/followers')
      .then(res => res.json())
      .then(data => setFollowers(data))
      .catch(err => console.log('Error when fetching data...'));
  });

  return (
    <div>
      {followers.map((follower, index) => (
        <FollowerItem username={follower.login} key={index} />
      ))}
    </div>
  );
}

export default Content;
