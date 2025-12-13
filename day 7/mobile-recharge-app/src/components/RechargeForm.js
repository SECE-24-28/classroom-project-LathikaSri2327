import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import OperatorCard from './OperatorCard';

const RechargeForm = ({ operators }) => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedOperator, setSelectedOperator] = useState(null);
  const { addRecharge } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone && amount && selectedOperator) {
      addRecharge({ phone, amount, operator: selectedOperator.name });
      setPhone('');
      setAmount('');
      setSelectedOperator(null);
      alert('Recharge successful!');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-primary">Mobile Recharge</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {operators.map(op => (
          <OperatorCard 
            key={op.id}
            operator={op}
            isSelected={selectedOperator?.id === op.id}
            onSelect={setSelectedOperator}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border rounded-lg"
          required
        />
        <button 
          type="submit"
          className="w-full bg-accent text-primary font-bold py-3 rounded-lg hover:bg-opacity-90"
        >
          Recharge Now
        </button>
      </form>
    </div>
  );
};

export default RechargeForm;