import React from 'react';
import { Position } from 'reactflow';
import { Wand2 } from 'lucide-react';
import Textarea from '../ui/textarea';
import NodeWrapper from './node-wrapper';

export const TransformNode = ({ id }) => {
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`,
      label: 'Input',
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
      label: 'Transformed',
    },
  ];

  return (
    <NodeWrapper id={id} title="Transform Node" handles={handles} icon={Wand2}>
      <Textarea
        placeholder="Enter transformation logic..."
        className="h-20 border-indigo-400"
      />
    </NodeWrapper>
  );
};

export default TransformNode;
