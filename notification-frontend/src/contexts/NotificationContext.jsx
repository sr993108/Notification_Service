import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

// Export the context directly
export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  
  // Fetch initial notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await api.get('/users/current-user-id/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    fetchNotifications();
  }, []);

  const sendNotification = async (notification) => {
    try {
      await api.post('/notifications', notification);
      setNotifications(prev => [notification, ...prev]);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return (
    <NotificationContext.Provider value={{ notifications, sendNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Export the hook with proper error handling
export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotificationContext must be used within a NotificationProvider'
    );
  }
  return context;
};
