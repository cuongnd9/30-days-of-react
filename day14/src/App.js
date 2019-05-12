import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/cuongw/following')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => setUsers([]));
  });
  return (
    <div className="container p-5">
      {users.map((user, index) => (
        <a
          className="text-success my-3 display-4 d-block"
          href={`https://github.com/${user.login}`}
        >
          {user.login}
        </a>
      ))}
    </div>
  );
}

export default App;
