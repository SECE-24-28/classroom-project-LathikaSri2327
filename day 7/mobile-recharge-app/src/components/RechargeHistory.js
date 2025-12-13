import React from 'react';
import { useAppContext } from '../context/AppContext';

const RechargeHistory = ({ limit }) => {
  const { recharges } = useAppContext();
  const displayRecharges = limit ? recharges.slice(0, limit) : recharges;

  if (recharges.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-bold text-primary mb-2">No History</h3>
        <p className="text-gray-600">Your recharges will appear here</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-primary mb-4">Recent Recharges</h3>
      <div className="space-y-3">
        {displayRecharges.map(recharge => (
          <div key={recharge.id} className="flex justify-between items-center p-3 border rounded">
            <div>
              <p className="font-semibold">{recharge.operator}</p>
              <p className="text-sm text-gray-600">{recharge.phone}</p>
            </div>
            <span className="font-bold text-accent">₹{recharge.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RechargeHistory;