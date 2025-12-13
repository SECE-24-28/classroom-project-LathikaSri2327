import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-white mb-4">
          Quick Mobile Recharge
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Instant recharge with proper form validation
        </p>
        <div className="text-8xl mb-8">📱</div>
        <div className="space-x-4">
          <Link 
            to="/recharge" 
            className="bg-accent text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
          >
            Start Recharge
          </Link>
          <Link 
            to="/login" 
            className="bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-lg font-bold hover:bg-accent hover:text-primary transition-colors"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-primary mb-2">Form Validation</h3>
              <p className="text-gray-600">React Hook Form with Yup validation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-primary mb-2">Instant Processing</h3>
              <p className="text-gray-600">Quick and secure transactions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-primary mb-2">Secure Forms</h3>
              <p className="text-gray-600">Validated input fields</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;