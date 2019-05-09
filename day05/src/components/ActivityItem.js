import React from 'react';

function ActivityItem(props) {
  const { activity } = props;
  return (
    <div className="d-flex w-100 p-3 align-items-center rounded border my-3">
      <div className="d-flex align-items-center w-100 p-3">
        <img
          className="rounded-circle mr-3"
          alt={activity.text}
          src={activity.user.avatar}
          width="80"
          height="80"
        />
        <div className="d-flex flex-column">
          <small className="font-weight-light text-secondary m-0 p-0">
            {activity.timestamp}
          </small>
          <p className="font-weight-bold text-secondary">{activity.text}</p>
        </div>
      </div>
      <div className="d-flex flex-row-reverse w-100 p-3">
        <p>
          <span className="text-secondary mr-2">
            {activity.comments.length}
          </span>
          <i className="fas fa-comment text-secondary" />
        </p>
      </div>
    </div>
  );
}

export default ActivityItem;
