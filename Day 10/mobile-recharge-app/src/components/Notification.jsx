import React from 'react';
import { useApp } from '../context/AppContext';

const Notification = ({ notification }) => {
  const { removeNotification } = useApp();

  const types = {
    success: { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-800', icon: '✅' },
    error: { bg: 'bg-red-100', border: 'border-red-500', text: 'text-red-800', icon: '❌' },
    warning: { bg: 'bg-yellow-100', border: 'border-yellow-500', text: 'text-yellow-800', icon: '⚠️' },
    info: { bg: 'bg-blue-100', border: 'border-blue-500', text: 'text-blue-800', icon: 'ℹ️' }
  };

  const style = types[notification.type] || types.info;

  return (
    <div className={`fixed top-20 right-4 z-50 p-4 rounded-lg border-l-4 shadow-lg animate-slide-up ${style.bg} ${style.border} ${style.text} max-w-sm`}>
      <div className="flex items-start space-x-3">
        <span className="text-xl">{style.icon}</span>
        <div className="flex-1">
          <p className="font-medium">{notification.message}</p>
        </div>
        <button
          onClick={() => removeNotification(notification.id)}
          className="text-lg hover:opacity-75 transition-opacity"
        >
          ×
        </button>
      </div>
    </div>
  );
};

const NotificationContainer = () => {
  const { notifications } = useApp();

  return (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-2">
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationContainer;