import React from 'react';
import { Handle } from 'reactflow';
import { Trash2 } from 'lucide-react';
import { useStore } from '../../store';
import Card from '../ui/card';

export const NodeWrapper = ({ title, children, handles, id, icon: IconComponent }) => {
  const deleteNode = useStore((state) => state.removeNode);

  const computeLabelPosition = (placement) => {
    const positions = {
      left: 'absolute -translate-x-full -left-2 top-2',
      right: 'absolute translate-x-full right-0 top-2',
      top: 'absolute left-4 -translate-y-full -top-2',
      bottom: 'absolute left-4 translate-y-full bottom-0',
    };
    return positions[placement] || '';
  };

  return (
    <Card className="group relative w-64 p-5 border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50 shadow-lg transition-all hover:shadow-xl hover:border-blue-400">
      <button
        onClick={() => deleteNode(id)}
        className="absolute -top-2 -right-2 p-1.5 rounded-full bg-rose-500 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-600 shadow-md"
      >
        <Trash2 size={14} />
      </button>
      {handles && handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
          className="relative !w-3 !h-3 !bg-emerald-400 !border-2 !border-emerald-600 hover:!bg-emerald-500 transition-all hover:scale-110"
        >
          {handle.label && (
            <span className={`${computeLabelPosition(handle.position)} text-xs font-medium text-gray-600 whitespace-nowrap pointer-events-none`}>
              {handle.label}
            </span>
          )}
        </Handle>
      ))}
      <div className="mb-4 flex items-center gap-3">
        {IconComponent && (
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 shadow-sm">
            <IconComponent className="w-5 h-5 text-blue-600" />
          </div>
        )}
        <span className="text-base font-bold text-gray-800">{title}</span>
      </div>
      {children}
    </Card>
  );
};

export default NodeWrapper;
