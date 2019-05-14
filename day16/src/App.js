import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faStar);

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/cuongw/repos')
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(_ => setRepos([]));
  });

  return (
    <div className="container p-5">
      <h4 className="text-danger mb-3">My Repos</h4>
      {repos.length === 0 && (
        <ClipLoader sizeUnit={'px'} size={45} color={'#123abc'} />
      )}
      {repos.length !== 0 &&
        repos.map((repo, index) => (
          <div className="d-flex border-bottom mb-3" key={index}>
            <div className="w-100">
              <a className="text-primary h4" href={repo.html_url}>
                <u>{repo.name}</u>
              </a>
              <p className="text-dark">{repo.description}</p>
            </div>
            <div className="w-100">
              <p className="text-right">{repo.stargazers_count}<FontAwesomeIcon className="mx-1" color="#343a40" icon="star" /></p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
