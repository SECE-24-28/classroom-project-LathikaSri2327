import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-6 mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-accent mb-2">📱 RechargeApp</h3>
          <p className="text-sm">Quick and secure mobile recharge solution</p>
        </div>
        <div className="border-t border-secondary pt-4">
          <p className="text-sm">&copy; 2024 RechargeApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;