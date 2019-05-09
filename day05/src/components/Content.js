import React from 'react';
import ActivityItem from './ActivityItem';

function Content(props) {
  const { activities } = props;
  return (
    <div>
      {activities.map((activity, index) => (
        <ActivityItem activity={activity} />
      ))}
    </div>
  );
}

export default Content;
