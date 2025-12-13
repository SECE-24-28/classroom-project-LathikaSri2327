import React from 'react';
import { useAppContext } from '../context/AppContext';

const Header = ({ title }) => {
  const { theme, setTheme } = useAppContext();

  return (
    <header className="bg-primary text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <button 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="bg-accent px-3 py-1 rounded"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Header;