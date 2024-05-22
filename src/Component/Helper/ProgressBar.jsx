// ProgressBar.js
import React from 'react';

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="my-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold text-grey">{label}</span>
        <span className="text-lg font-semibold text-pink">{percentage}%</span>
      </div>
      <div className="w-full bg-grey rounded-full h-4">
        <div
          className="bg-pink h-4 rounded-full"
          style={{ width: `${percentage}%`, transition: 'width 1s' }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
