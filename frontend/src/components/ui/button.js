import React from 'react';
import clsx from 'clsx';

export const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-200 rounded-lg shadow-sm hover:shadow-md',
    danger: 'bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-200 rounded-lg shadow-sm',
    outline: 'border-2 border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 hover:border-gray-400 rounded-lg',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-100 rounded-lg',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 rounded-md',
  };
  const sizeStyles = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-5 text-sm',
    lg: 'h-12 px-7 text-base',
    icon: 'h-10 w-10',
  };

  return (
    <button className={clsx(baseClasses, variantStyles[variant], sizeStyles[size], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
