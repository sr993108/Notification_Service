import React from 'react';
import { useNotificationContext } from '../contexts/NotificationContext';

const NotificationList = () => {
  const { notifications } = useNotificationContext();

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Notification History</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {notifications.map(({ _id, type, content, createdAt }) => (
            <li key={_id} className="py-4 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium capitalize text-indigo-600">{type}</p>
                <p className="text-gray-700">{content}</p>
              </div>
              <time className="text-xs text-gray-400" dateTime={createdAt} title={new Date(createdAt).toLocaleString()}>
                {new Date(createdAt).toLocaleTimeString()}
              </time>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationList;
