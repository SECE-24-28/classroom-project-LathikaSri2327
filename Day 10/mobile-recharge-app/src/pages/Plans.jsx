import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Plans = () => {
  const [activeTab, setActiveTab] = useState('prepaid');

  const prepaidPlans = [
    { id: 1, name: 'Basic Plan', amount: 199, validity: '28 Days', data: '1GB/day', calls: 'Unlimited', sms: '100/day' },
    { id: 2, name: 'Standard Plan', amount: 299, validity: '30 Days', data: '2GB/day', calls: 'Unlimited', sms: '100/day' },
    { id: 3, name: 'Premium Plan', amount: 499, validity: '28 Days', data: 'Unlimited', calls: 'Unlimited', sms: '100/day' },
    { id: 4, name: 'Ultra Plan', amount: 699, validity: '30 Days', data: '5GB/day', calls: 'Unlimited', sms: '100/day' },
    { id: 5, name: 'Family Plan', amount: 999, validity: '30 Days', data: '10GB shared', calls: 'Unlimited', sms: '100/day' },
    { id: 6, name: 'Student Plan', amount: 149, validity: '28 Days', data: '500MB/day', calls: 'Unlimited', sms: '100/day' }
  ];

  const postpaidPlans = [
    { id: 1, name: 'Postpaid Basic', amount: 399, validity: '30 Days', data: '25GB', calls: 'Unlimited', sms: 'Unlimited' },
    { id: 2, name: 'Postpaid Premium', amount: 599, validity: '30 Days', data: '75GB', calls: 'Unlimited', sms: 'Unlimited' },
    { id: 3, name: 'Postpaid Ultra', amount: 999, validity: '30 Days', data: 'Unlimited', calls: 'Unlimited', sms: 'Unlimited' }
  ];

  const currentPlans = activeTab === 'prepaid' ? prepaidPlans : postpaidPlans;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            Recharge Plans
          </h1>
          <p className="text-gray-200">Choose the perfect plan for your needs</p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('prepaid')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'prepaid'
                  ? 'bg-accent text-primary shadow-md'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Prepaid Plans
            </button>
            <button
              onClick={() => setActiveTab('postpaid')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'postpaid'
                  ? 'bg-accent text-primary shadow-md'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Postpaid Plans
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <Card 
              key={plan.id} 
              className={`text-center hover:scale-105 transition-transform animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-accent mb-2">₹{plan.amount}</div>
                <p className="text-gray-600">Valid for {plan.validity}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Data</span>
                  <span className="font-medium">{plan.data}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Calls</span>
                  <span className="font-medium">{plan.calls}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">SMS</span>
                  <span className="font-medium">{plan.sms}</span>
                </div>
              </div>
              
              <Button className="w-full">
                Select Plan
              </Button>
            </Card>
          ))}
        </div>

        {/* Popular Plans Badge */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-accent to-orange-300 text-primary">
            <h2 className="text-2xl font-bold mb-4">🔥 Most Popular Plans</h2>
            <p className="text-lg mb-6">
              Join millions of satisfied customers with our best-selling plans
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Offers
              </Button>
              <Button className="bg-primary text-white hover:bg-opacity-90">
                Get Started
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Plans;