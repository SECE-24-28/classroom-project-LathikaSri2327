import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [rechargeHistory, setRechargeHistory] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    addNotification('success', 'Login successful!');
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    addNotification('info', 'Logged out successfully');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const addRecharge = (recharge) => {
    const newRecharge = {
      ...recharge,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      status: 'success'
    };
    setRechargeHistory(prev => [newRecharge, ...prev]);
  };

  const addNotification = (type, message) => {
    const notification = {
      id: Date.now(),
      type,
      message,
      timestamp: Date.now()
    };
    setNotifications(prev => [...prev, notification]);
    setTimeout(() => removeNotification(notification.id), 5000);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <AppContext.Provider value={{
      isLoggedIn,
      user,
      theme,
      rechargeHistory,
      notifications,
      loading,
      login,
      logout,
      toggleTheme,
      addRecharge,
      addNotification,
      removeNotification,
      setLoading
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);