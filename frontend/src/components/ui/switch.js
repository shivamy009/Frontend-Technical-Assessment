import React from 'react';

export const Switch = ({ id, checked, onChange, className = '' }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      id={id}
      onClick={() => onChange && onChange(!checked)}
      className={`relative inline-flex h-7 w-14 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-200 ${checked ? 'bg-emerald-500' : 'bg-gray-300'} ${className}`}
    >
      <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${checked ? 'translate-x-8' : 'translate-x-1'}`} />
    </button>
  );
};

export default Switch;
