import React, { useState } from 'react';
import clsx from 'clsx';

export const Select = ({ children, value, onValueChange, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" {...props}>
      {React.Children.map(children, (child) => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, { onClick: () => setIsOpen(!isOpen), value });
        }
        if (child.type === SelectContent) {
          return React.cloneElement(child, { isOpen, onSelect: (val) => { onValueChange(val); setIsOpen(false); } });
        }
        return child;
      })}
    </div>
  );
};

export const SelectTrigger = ({ children, onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'flex h-11 w-full items-center justify-between rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100',
        className
      )}
    >
      {children}
      <svg className="h-4 w-4 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
    </button>
  );
};

export const SelectValue = ({ placeholder, value }) => {
  return <span>{value || placeholder}</span>;
};

export const SelectContent = ({ children, isOpen, onSelect, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div className={clsx('absolute z-50 mt-2 w-full rounded-lg border-2 border-gray-200 bg-white shadow-xl max-h-60 overflow-auto', className)}>
      <div className="p-1">
        {React.Children.map(children, (child) => {
          if (child.type === SelectItem) {
            return React.cloneElement(child, { onSelect });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export const SelectItem = ({ children, value, onSelect, className = '' }) => {
  return (
    <div
      onClick={() => onSelect(value)}
      className={clsx(
        'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Select;
