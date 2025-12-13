import React from 'react';

const Loader = ({ size = 'md', text = 'Loading...' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`loader ${sizes[size]}`}></div>
      {text && <p className="text-gray-600">{text}</p>}
    </div>
  );
};

export default Loader;