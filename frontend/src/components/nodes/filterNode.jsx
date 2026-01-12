import React, { useState } from 'react';
import { Position } from 'reactflow';
import { Filter } from 'lucide-react';
import Input from '../ui/input';
import NodeWrapper from './node-wrapper';

export const FilterNode = ({ id }) => {
  const [condition, setCondition] = useState('');

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
      id: `${id}-true`,
      label: 'True',
    },
    {
      type: 'source',
      position: Position.Bottom,
      id: `${id}-false`,
      label: 'False',
    },
  ];

  return (
    <NodeWrapper id={id} title="Filter Node" handles={handles} icon={Filter}>
      <Input
        placeholder="Enter condition..."
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        className="w-full border-indigo-400"
      />
    </NodeWrapper>
  );
};

export default FilterNode;
