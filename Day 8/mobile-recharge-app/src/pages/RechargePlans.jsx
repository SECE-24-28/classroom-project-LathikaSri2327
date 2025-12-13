import React from 'react';
import PlanCard from '../components/PlanCard';

const RechargePlans = () => {
  const prepaidPlans = [
    { name: 'Basic Plan', amount: 199, validity: '28 Days', data: '1GB/day' },
    { name: 'Standard Plan', amount: 299, validity: '30 Days', data: '2GB/day' },
    { name: 'Premium Plan', amount: 499, validity: '28 Days', data: 'Unlimited' },
    { name: 'Ultra Plan', amount: 699, validity: '30 Days', data: '5GB/day' }
  ];

  const postpaidPlans = [
    { name: 'Postpaid Basic', amount: 399, validity: '30 Days', data: '25GB' },
    { name: 'Postpaid Premium', amount: 599, validity: '30 Days', data: '75GB' },
    { name: 'Postpaid Ultra', amount: 999, validity: '30 Days', data: 'Unlimited' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Recharge Plans
        </h1>
        
        {/* Prepaid Plans */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Prepaid Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prepaidPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>
        
        {/* Postpaid Plans */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Postpaid Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postpaidPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RechargePlans;