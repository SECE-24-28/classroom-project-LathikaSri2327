import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'p-6',
  onClick 
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        card 
        ${padding} 
        ${hover ? 'hover:shadow-xl hover:-translate-y-1' : ''} 
        ${onClick ? 'cursor-pointer' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;