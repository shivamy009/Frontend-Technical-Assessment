import React from 'react';
import { Button } from './ui/button';
import clsx from 'clsx';

export const DraggableNode = ({ type, label, icon: IconComponent, className = '' }) => {
  const handleDragStart = (evt, nodeType) => {
    evt.stopPropagation();
    evt.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType }));
    evt.dataTransfer.effectAllowed = 'move';
    document.body.style.cursor = 'grabbing';
  };

  const handleDragEnd = () => {
    document.body.style.cursor = 'default';
  };

  return (
    <div draggable onDragStart={(e) => handleDragStart(e, type)} onDragEnd={handleDragEnd} className="cursor-grab active:cursor-grabbing">
      <div className={clsx('flex flex-col items-center justify-center gap-2 h-20 w-20 p-3 bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all transform hover:scale-105', className)}>
        {IconComponent && <IconComponent className="h-6 w-6 text-blue-600" />}
        <span className="text-[10px] font-semibold text-gray-700 leading-tight text-center">{label}</span>
      </div>
    </div>
  );
};

export default DraggableNode;
