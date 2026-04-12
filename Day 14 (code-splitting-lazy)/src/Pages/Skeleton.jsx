import React from 'react';

const Skeleton = () => {
  return (
    <div className="animate-pulse space-y-2">
      <div className="bg-gray-300 h-32 w-full rounded-md"></div>
      <div className="bg-gray-300 h-3 w-3/4 rounded"></div>
      <div className="bg-gray-300 h-3 w-1/2 rounded"></div>
    </div>
  );
};

export default Skeleton;