import React from 'react';
import { Link } from 'react-router-dom';
import PlanCard from '../components/PlanCard';

const LandingPage = () => {
  const featuredPlans = [
    { name: 'Basic Plan', amount: 199, validity: '28 Days', data: '1GB/day' },
    { name: 'Standard Plan', amount: 299, validity: '30 Days', data: '2GB/day' },
    { name: 'Premium Plan', amount: 499, validity: '28 Days', data: 'Unlimited' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-white mb-4">
          Quick Mobile Recharge
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Instant recharge for all major operators
        </p>
        <div className="text-8xl mb-8">📱</div>
        <Link 
          to="/plans" 
          className="bg-accent text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
        >
          View All Plans
        </Link>
      </div>

      {/* Featured Plans */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Featured Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPlans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-primary mb-2">Instant Recharge</h3>
              <p className="text-gray-600">Lightning fast processing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-primary mb-2">Secure Payment</h3>
              <p className="text-gray-600">Bank-level security</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-primary mb-2">Best Offers</h3>
              <p className="text-gray-600">Exclusive cashback deals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;