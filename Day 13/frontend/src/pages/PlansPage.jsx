import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';
import { toast } from 'react-toastify';

const PlanCard = ({ plan, onDelete, isAdmin }) => (
  <div className="plan-card">
    <h3>{plan.planName}</h3>
    <div className="plan-price">₹{plan.price}</div>
    <div className="plan-details">
      <p><strong>Operator:</strong> {plan.operator}</p>
      <p><strong>Validity:</strong> {plan.validity}</p>
      <p><strong>Data:</strong> {plan.data}</p>
      <p><strong>Description:</strong> {plan.description}</p>
    </div>
    {isAdmin && (
      <div className="plan-actions">
        <button onClick={() => onDelete(plan._id)} className="delete-btn">
          Delete
        </button>
      </div>
    )}
  </div>
);

const PlansPage = () => {
  const { user } = useAuth();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const isAdmin = user?.role === 'admin';

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const response = await api.get('/plans');
      setPlans(response.data);
      setError('');
    } catch (error) {
      setError('Failed to fetch plans');
      toast.error('Failed to fetch plans');
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePlan = async (planId) => {
    if (!window.confirm('Are you sure you want to delete this plan?')) return;

    try {
      await api.delete(`/plans/${planId}`);
      setPlans(plans.filter(plan => plan._id !== planId));
      toast.success('Plan deleted successfully');
    } catch (error) {
      toast.error('Failed to delete plan');
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading plans...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={fetchPlans}>Retry</button>
      </div>
    );
  }

  return (
    <div className="plans-page">
      <div className="container">
        <div className="plans-header">
          <h1>Recharge Plans</h1>
          {isAdmin && (
            <button className="add-plan-btn">Add New Plan</button>
          )}
        </div>

        {plans.length === 0 ? (
          <div className="no-plans">
            <p>No recharge plans available</p>
          </div>
        ) : (
          <div className="plans-grid">
            {plans.map(plan => (
              <PlanCard
                key={plan._id}
                plan={plan}
                onDelete={handleDeletePlan}
                isAdmin={isAdmin}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlansPage;