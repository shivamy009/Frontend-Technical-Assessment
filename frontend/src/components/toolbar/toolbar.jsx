import React from 'react';
import { useStore } from '../../store';
import { shallow } from 'zustand/shallow';
import DraggableNode from '../draggable-node';
import SubmitButton from '../submit';
import nodes from './nodes-nav';
import Card from '../ui/card';
import Switch from '../ui/switch';
import Label from '../ui/label';
import HamburgerButton from './hamburger-button';
import HamburgerMenu from './hamburger-menu';

const stateSelector = (state) => ({
  customEdgeEnabled: state.isCustomEdge,
  animationEnabled: state.isAnimated,
  handleEdgeTypeToggle: state.toggleEdgeType,
  handleAnimationToggle: state.toggleAnimation,
});

export const PipelineToolbar = () => {
  const { customEdgeEnabled, animationEnabled, handleEdgeTypeToggle, handleAnimationToggle } = useStore(stateSelector, shallow);

  return (
    <>
      <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-none py-4 px-5 border-b-4 border-blue-700 shadow-lg">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-5 lg:gap-8 flex-1 min-w-0">
            <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white flex justify-center items-center font-bold rounded-xl shadow-md">
              <span className="text-blue-600 text-2xl sm:text-3xl lg:text-4xl">⚡</span>
            </div>

            <div className="hidden lg:flex items-center gap-3 overflow-x-hidden">
              {nodes.map((node) => (
                <DraggableNode key={node.type} type={node.type} label={node.label} icon={node.icon} />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <div className="lg:hidden">
              <HamburgerButton />
            </div>
            <div className="hidden lg:flex items-center gap-5">
              <div className="flex flex-col items-center space-y-2 w-20">
                <Switch id="edge-deletion" checked={customEdgeEnabled} onChange={handleEdgeTypeToggle} />
                <Label htmlFor="edge-deletion" className="text-xs text-white font-medium text-center w-full">Delete Edges</Label>
              </div>
              <div className="flex flex-col items-center space-y-2 w-20">
                <Switch id="edge-animate" checked={animationEnabled} onChange={handleAnimationToggle} />
                <Label htmlFor="edge-animate" className="text-xs text-white font-medium text-center w-full">Animate Flow</Label>
              </div>
            </div>
            <SubmitButton className="" />
          </div>
        </div>
      </Card>
      <HamburgerMenu />
    </>
  );
};

export default PipelineToolbar;
