import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">📱</span>
              <span className="text-xl font-bold text-accent">RechargeApp</span>
            </div>
            <p className="text-gray-300">Quick and secure mobile recharge solution for all your needs.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/recharge" className="text-gray-300 hover:text-accent transition-colors">Recharge</Link></li>
              <li><Link to="/plans" className="text-gray-300 hover:text-accent transition-colors">Plans</Link></li>
              <li><Link to="/history" className="text-gray-300 hover:text-accent transition-colors">History</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-accent transition-colors">📘</a>
              <a href="#" className="text-2xl hover:text-accent transition-colors">🐦</a>
              <a href="#" className="text-2xl hover:text-accent transition-colors">📷</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 RechargeApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;