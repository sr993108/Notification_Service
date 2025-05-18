import React, { useState } from 'react';
import { useNotificationContext } from '../contexts/NotificationContext';

const NotificationForm = () => {
  const [content, setContent] = useState('');
  const [type, setType] = useState('email');
  const { sendNotification } = useNotificationContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    sendNotification({
      type,
      content,
      userId: 'current-user-id' // Replace with actual user ID
    });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send a Notification</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="email">Email</option>
          <option value="sms">SMS</option>
          <option value="in-app">In-App</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Type your notification message here..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
      >
        Send Notification
      </button>
    </form>
  );
};

export default NotificationForm;
