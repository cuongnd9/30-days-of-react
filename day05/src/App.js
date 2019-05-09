import React from 'react';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const activities = [
    {
      timestamp: new Date().getTime(),
      text: 'Ate lunch',
      user: {
        id: 1,
        name: 'Nate',
        avatar: 'http://cdn.hoahoctro.vn/uploads/2018/10/5bc41f947aa93-1.jpg'
      },
      comments: [{ from: 'Ari', text: 'Me too!' }]
    },
    {
      timestamp: new Date().getTime(),
      text: 'Woke up early for a beautiful run',
      user: {
        id: 2,
        name: 'Ari',
        avatar: 'http://sendauroi.com/wp-content/uploads/2018/05/11-15.jpg'
      },
      comments: [{ from: 'Nate', text: 'I am so jealous' }]
    }
  ];
  return (
    <div className="container p-4">
      <Header title="Timeline" />
      <Content activities={activities} />
    </div>
  );
}

export default App;
