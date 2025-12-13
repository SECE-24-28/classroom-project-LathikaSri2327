import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="bg-primary text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-accent">
          📱 RechargeApp
        </Link>
        
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/recharge" className="hover:text-accent transition-colors">
            Recharge
          </Link>
          
          {isLoggedIn ? (
            <button 
              onClick={logout}
              className="hover:text-accent transition-colors"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="hover:text-accent transition-colors">
                Login
              </Link>
              <Link to="/signup" className="hover:text-accent transition-colors">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;