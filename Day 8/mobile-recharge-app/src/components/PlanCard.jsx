import React from 'react';

const PlanCard = ({ plan }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
      <div className="text-3xl font-bold text-accent mb-2">₹{plan.amount}</div>
      <p className="text-gray-600 mb-2">Validity: {plan.validity}</p>
      <p className="text-gray-600 mb-4">Data: {plan.data}</p>
      <button className="w-full bg-accent text-primary font-bold py-2 rounded-lg hover:bg-opacity-90 transition-colors">
        Select Plan
      </button>
    </div>
  );
};

export default PlanCard;