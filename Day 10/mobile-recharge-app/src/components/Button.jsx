import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  const baseClasses = 'btn transition-all duration-300 focus:outline-none focus:ring-2';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''} 
        ${className}
      `}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="loader h-4 w-4"></div>
          <span>Loading...</span>
        </div>
      ) : children}
    </button>
  );
};

export default Button;