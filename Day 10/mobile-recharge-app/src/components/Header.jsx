import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, user, logout, theme, toggleTheme } = useApp();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Recharge', path: '/recharge' },
    { name: 'Plans', path: '/plans' },
    { name: 'History', path: '/history' }
  ];

  return (
    <header className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-900' : 'bg-primary'} text-white shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">📱</span>
            <span className="text-xl font-bold text-accent">RechargeApp</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-accent transition-colors ${
                  location.pathname === item.path ? 'text-accent' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="hidden sm:block">Hi, {user?.name}</span>
                <Button variant="secondary" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex space-x-2">
                <Link to="/login">
                  <Button variant="secondary" size="sm">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary" size="sm">Sign Up</Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-600">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-4 py-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {!isLoggedIn && (
              <div className="flex space-x-2 px-4 pt-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="secondary" size="sm">Login</Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" size="sm">Sign Up</Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;