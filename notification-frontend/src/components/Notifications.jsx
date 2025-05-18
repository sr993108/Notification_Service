import React, { useEffect } from 'react';
import { useNotificationContext } from '../contexts/NotificationContext';
import { ToastContainer, toast } from 'react-toastify';

const toastTypeMap = {
  email: 'info',
  sms: 'success',
  'in-app': 'default'
};

const Notifications = () => {
  const { notifications } = useNotificationContext();

  useEffect(() => {
    notifications.forEach(notification => {
      const toastType = toastTypeMap[notification.type] || 'default';
      toast[toastType](notification.content, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    });
  }, [notifications]);

  return <ToastContainer />;
};

export default Notifications;
