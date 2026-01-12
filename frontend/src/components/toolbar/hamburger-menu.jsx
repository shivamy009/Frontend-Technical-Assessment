import React from 'react';
import { useStore } from '../../store';
import { shallow } from 'zustand/shallow';
import DraggableNode from '../draggable-node';
import SubmitButton from '../submit';
import Switch from '../ui/switch';
import Label from '../ui/label';
import nodes from './nodes-nav';

export const HamburgerMenu = () => {
  const { isCustomEdge, isAnimated, toggleEdgeType, toggleAnimation, isMenuOpen } = useStore(
    (state) => ({
      isCustomEdge: state.isCustomEdge,
      isAnimated: state.isAnimated,
      toggleEdgeType: state.toggleEdgeType,
      toggleAnimation: state.toggleAnimation,
      isMenuOpen: state.isMenuOpen,
    }),
    shallow
  );

  if (!isMenuOpen) return null;

  return (
    <div className="fixed top-[72px] right-0 bottom-0 w-72 sm:w-80 bg-white border-l border-gray-200 lg:hidden z-40 shadow-lg">
      <div className="p-4 sm:p-6 flex flex-col h-full overflow-y-auto">
        <div className="mb-4 sm:mb-6">
          <h3 className="font-semibold text-lg text-gray-900">Pipeline</h3>
          <p className="text-sm text-gray-600">Customize your pipeline here.</p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-3 mb-6">
          {nodes.map((node) => (
            <DraggableNode
              key={node.type}
              type={node.type}
              label={node.label}
              icon={node.icon}
            />
          ))}
        </div>

        <div className="space-y-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Label htmlFor="edge-type-mobile" className="text-sm">Deletable Edges</Label>
            <Switch
              id="edge-type-mobile"
              checked={isCustomEdge}
              onChange={toggleEdgeType}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="edge-animation-mobile" className="text-sm">Animated Edges</Label>
            <Switch
              id="edge-animation-mobile"
              checked={isAnimated}
              onChange={toggleAnimation}
            />
          </div>

          <SubmitButton className="w-full !h-12 mt-4" />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;