import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { rechargeSchema } from '../schemas/validationSchemas';

const Recharge = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm({
    resolver: yupResolver(rechargeSchema)
  });

  const operators = [
    { id: 1, name: 'Airtel', logo: '📶' },
    { id: 2, name: 'Jio', logo: '🔵' },
    { id: 3, name: 'Vi', logo: '🔴' },
    { id: 4, name: 'BSNL', logo: '🟡' }
  ];

  const quickAmounts = [50, 100, 200, 500, 1000];

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(`Recharge successful! ₹${data.amount} for ${data.phoneNumber}`);
      reset();
    } catch (error) {
      console.error('Recharge failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Mobile Recharge
        </h1>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Operators */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Operator
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {operators.map(op => (
                  <div key={op.id} className="p-3 border rounded-lg text-center hover:border-accent cursor-pointer">
                    <div className="text-2xl mb-1">{op.logo}</div>
                    <span className="text-sm font-medium">{op.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                {...register('phoneNumber')}
                className={`w-full p-3 border rounded-lg focus:outline-none ${
                  errors.phoneNumber ? 'border-red-500' : 'border-gray-300 focus:border-accent'
                }`}
                placeholder="Enter 10-digit mobile number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="number"
                {...register('amount')}
                className={`w-full p-3 border rounded-lg focus:outline-none ${
                  errors.amount ? 'border-red-500' : 'border-gray-300 focus:border-accent'
                }`}
                placeholder="Enter amount"
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
              )}
              
              {/* Quick Amounts */}
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-sm text-gray-600">Quick amounts:</span>
                {quickAmounts.map(amount => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setValue('amount', amount)}
                    className="px-3 py-1 text-sm border border-tertiary rounded hover:border-accent hover:bg-accent hover:text-white transition-colors"
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold py-3 rounded-lg transition-colors ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-accent text-primary hover:bg-opacity-90'
              }`}
            >
              {isSubmitting ? 'Processing...' : 'Recharge Now'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recharge;