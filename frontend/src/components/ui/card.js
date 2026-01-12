import React from 'react';
import clsx from 'clsx';

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={clsx('rounded-xl bg-white border-2 border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-200', className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
