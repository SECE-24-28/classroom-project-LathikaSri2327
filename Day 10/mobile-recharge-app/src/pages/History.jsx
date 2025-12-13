import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Card from '../components/Card';
import Button from '../components/Button';

const History = () => {
  const { rechargeHistory } = useApp();
  const [sortBy, setSortBy] = useState('newest');
  const [filterStatus, setFilterStatus] = useState('all');

  const sortedHistory = [...rechargeHistory].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.timestamp) - new Date(a.timestamp);
      case 'oldest':
        return new Date(a.timestamp) - new Date(b.timestamp);
      case 'amount-high':
        return b.amount - a.amount;
      case 'amount-low':
        return a.amount - b.amount;
      default:
        return 0;
    }
  });

  const filteredHistory = sortedHistory.filter(recharge => {
    if (filterStatus === 'all') return true;
    return recharge.status === filterStatus;
  });

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return '✅';
      case 'failed': return '❌';
      case 'pending': return '⏳';
      default: return '❓';
    }
  };

  if (rechargeHistory.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Recharge History</h1>
          <Card className="text-center py-16">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-primary mb-4">No Recharge History</h3>
            <p className="text-gray-600 mb-8">Your recharge history will appear here once you make your first recharge</p>
            <Button>Start Your First Recharge</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            Recharge History
          </h1>
          <p className="text-gray-200">Track all your mobile recharge transactions</p>
        </div>

        <Card className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-primary">Transaction History</h2>
              <p className="text-gray-600">{filteredHistory.length} transactions found</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:border-accent focus:outline-none"
              >
                <option value="all">All Status</option>
                <option value="success">Success</option>
                <option value="failed">Failed</option>
                <option value="pending">Pending</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:border-accent focus:outline-none"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="amount-high">Amount: High to Low</option>
                <option value="amount-low">Amount: Low to High</option>
              </select>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          {filteredHistory.map((recharge, index) => (
            <Card 
              key={recharge.id} 
              className={`animate-slide-up hover:scale-[1.02] transition-transform`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">{recharge.operator}</h4>
                    <p className="text-gray-600">{recharge.phoneNumber}</p>
                    <p className="text-sm text-gray-500">{formatDate(recharge.timestamp)}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-accent">₹{recharge.amount}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(recharge.status)}`}>
                      {getStatusIcon(recharge.status)} {recharge.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary">View Details</Button>
                    {recharge.status === 'success' && (
                      <Button size="sm">Recharge Again</Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Card */}
        <Card className="mt-8 bg-gradient-to-r from-accent to-orange-300 text-primary">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{rechargeHistory.length}</div>
              <div className="text-sm opacity-90">Total Recharges</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                ₹{rechargeHistory.reduce((sum, r) => sum + r.amount, 0)}
              </div>
              <div className="text-sm opacity-90">Total Amount</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {Math.round((rechargeHistory.filter(r => r.status === 'success').length / rechargeHistory.length) * 100) || 0}%
              </div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default History;