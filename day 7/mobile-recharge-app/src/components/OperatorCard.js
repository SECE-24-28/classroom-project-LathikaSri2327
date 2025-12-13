import React from 'react';

const OperatorCard = ({ operator, isSelected, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(operator)}
      className={`p-4 border rounded-lg cursor-pointer transition-all ${
        isSelected ? 'border-accent bg-accent/10' : 'border-gray-300 hover:border-accent'
      }`}
    >
      <div className="text-center">
        <div className="text-2xl mb-2">{operator.logo}</div>
        <h3 className="font-semibold">{operator.name}</h3>
      </div>
    </div>
  );
};

export default OperatorCard;