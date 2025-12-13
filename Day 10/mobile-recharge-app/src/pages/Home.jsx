import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  const { isLoggedIn, rechargeHistory } = useApp();

  const features = [
    { icon: '⚡', title: 'Instant Recharge', desc: 'Lightning fast processing' },
    { icon: '🔒', title: 'Secure Payment', desc: 'Bank-level security' },
    { icon: '💰', title: 'Best Offers', desc: 'Exclusive cashback deals' },
    { icon: '📞', title: '24/7 Support', desc: 'Round the clock assistance' }
  ];

  const stats = [
    { label: 'Total Recharges', value: rechargeHistory.length },
    { label: 'Success Rate', value: '99.9%' },
    { label: 'Happy Users', value: '10K+' },
    { label: 'Operators', value: '4+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quick Mobile Recharge
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Instant recharge for all major operators with the best offers and secure payments
          </p>
          <div className="text-6xl md:text-8xl mb-8 animate-pulse-slow">📱</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/recharge">
              <Button size="lg">Start Recharge</Button>
            </Link>
            {!isLoggedIn && (
              <Link to="/signup">
                <Button variant="secondary" size="lg">Sign Up Free</Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Why Choose RechargeApp?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers and enjoy hassle-free mobile recharges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/recharge">
              <Button size="lg">Recharge Now</Button>
            </Link>
            <Link to="/plans">
              <Button variant="secondary" size="lg">View Plans</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;