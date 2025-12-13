import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useApp } from '../context/AppContext';
import { rechargeSchema } from '../schemas/validationSchemas';
import Button from '../components/Button';
import Card from '../components/Card';

const Recharge = () => {
  const [selectedOperator, setSelectedOperator] = useState('');
  const { addRecharge, addNotification } = useApp();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch
  } = useForm({
    resolver: yupResolver(rechargeSchema)
  });

  const operators = [
    { id: 'airtel', name: 'Airtel', logo: '📶', color: 'bg-red-100' },
    { id: 'jio', name: 'Jio', logo: '🔵', color: 'bg-blue-100' },
    { id: 'vi', name: 'Vi', logo: '🔴', color: 'bg-red-100' },
    { id: 'bsnl', name: 'BSNL', logo: '🟡', color: 'bg-yellow-100' }
  ];

  const quickAmounts = [50, 100, 200, 500, 1000];
  const watchedAmount = watch('amount');

  const onSubmit = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const recharge = {
        phoneNumber: data.phoneNumber,
        amount: data.amount,
        operator: operators.find(op => op.id === selectedOperator)?.name || 'Unknown'
      };
      
      addRecharge(recharge);
      addNotification('success', `Recharge of ₹${data.amount} successful!`);
      reset();
      setSelectedOperator('');
    } catch (error) {
      addNotification('error', 'Recharge failed. Please try again.');
    }
  };

  const handleOperatorSelect = (operatorId) => {
    setSelectedOperator(operatorId);
    setValue('operator', operatorId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            Mobile Recharge
          </h1>
          <p className="text-gray-200">Quick and secure mobile recharge</p>
        </div>
        
        <Card className="animate-slide-up">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Operator Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Operator *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {operators.map(op => (
                  <div
                    key={op.id}
                    onClick={() => handleOperatorSelect(op.id)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all text-center ${
                      selectedOperator === op.id 
                        ? 'border-accent bg-accent bg-opacity-10' 
                        : 'border-gray-300 hover:border-accent'
                    } ${op.color}`}
                  >
                    <div className="text-2xl mb-2">{op.logo}</div>
                    <span className="font-medium text-gray-700">{op.name}</span>
                  </div>
                ))}
              </div>
              <input type="hidden" {...register('operator')} />
              {errors.operator && (
                <p className="text-red-500 text-sm mt-1">{errors.operator.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register('phoneNumber')}
                className={`input-field ${errors.phoneNumber ? 'border-red-500' : ''}`}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount *
              </label>
              <input
                type="number"
                {...register('amount')}
                className={`input-field ${errors.amount ? 'border-red-500' : ''}`}
                placeholder="Enter amount (₹10 - ₹5000)"
                min="10"
                max="5000"
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
              )}
              
              {/* Quick Amounts */}
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Quick amounts:</p>
                <div className="flex flex-wrap gap-2">
                  {quickAmounts.map(amount => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setValue('amount', amount)}
                      className={`px-4 py-2 text-sm border rounded-lg transition-colors ${
                        parseInt(watchedAmount) === amount
                          ? 'bg-accent text-white border-accent'
                          : 'border-gray-300 hover:border-accent hover:bg-accent hover:text-white'
                      }`}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              type="submit"
              loading={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? 'Processing Recharge...' : 'Recharge Now'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Recharge;