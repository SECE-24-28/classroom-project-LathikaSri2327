import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import RechargeForm from '../components/RechargeForm';
import RechargeHistory from '../components/RechargeHistory';

const HomePage = () => {
  const { setUser } = useAppContext();

  const operators = [
    { id: 1, name: 'Airtel', logo: '📶' },
    { id: 2, name: 'Jio', logo: '🔵' },
    { id: 3, name: 'Vi', logo: '🔴' },
    { id: 4, name: 'BSNL', logo: '🟡' }
  ];

  useEffect(() => {
    setUser({ name: 'John Doe' });
  }, [setUser]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Quick Mobile Recharge</h1>
          <div className="text-6xl">📱</div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RechargeForm operators={operators} />
          <RechargeHistory limit={5} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;