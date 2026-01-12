import React from 'react';
import clsx from 'clsx';

export const Input = React.forwardRef(({ className = '', type = 'text', ...props }, ref) => {
  return (
    <input
      type={type}
      className={clsx(
        'w-full h-11 px-4 py-2.5 text-sm bg-gray-50 border-2 border-gray-200 rounded-lg transition-all duration-200 placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
