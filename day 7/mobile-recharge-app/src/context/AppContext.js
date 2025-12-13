import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [recharges, setRecharges] = useState([]);

  const addRecharge = (recharge) => {
    setRecharges(prev => [...prev, { ...recharge, id: Date.now() }]);
  };

  return (
    <AppContext.Provider value={{
      user, setUser,
      theme, setTheme,
      recharges, addRecharge
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);