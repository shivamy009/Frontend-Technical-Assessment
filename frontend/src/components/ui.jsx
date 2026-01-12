import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';
import InputNode from './nodes/inputNode';
import LLMNode from './nodes/llmNode';
import OutputNode from './nodes/outputNode';
import TextNode from './nodes/textNode';
import AggregateNode from './nodes/aggregateNode';
import DebugNode from './nodes/debugNode';
import FilterNode from './nodes/filterNode';
import HttpNode from './nodes/httpNode';
import TransformNode from './nodes/transformNode';
import EdgeWithDelete from './edges/edge-with-delete';
import CustomBaseEdge from './edges/base-edge';

import 'reactflow/dist/style.css';

const GRID_SPACING = 20;
const FLOW_OPTIONS = { hideAttribution: true };
const NODE_TYPE_MAP = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  aggregate: AggregateNode,
  debug: DebugNode,
  filter: FilterNode,
  http: HttpNode,
  transform: TransformNode,
};

const EDGE_TYPE_MAP = {
  custom: EdgeWithDelete,
  base: CustomBaseEdge,
};

// Minimap color scheme for different node types
const getNodeColorByType = (node) => {
  const colorMapping = {
    customInput: '#34d399',
    customOutput: '#8b5cf6',
    llm: '#f87171',
    text: '#06b6d4',
    aggregate: '#fbbf24',
    debug: '#60a5fa',
    filter: '#ec4899',
    http: '#10b981',
    transform: '#fb923c',
  };
  return colorMapping[node.type] || '#3b82f6';
};

const getNodeBorderColor = (node) => {
  return node.selected ? '#2563eb' : '#94a3b8';
};

const storeSelector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const flowWrapperRef = useRef(null);
  const [flowInstance, setFlowInstance] = useState(null);
  const { nodes, edges, getNodeID, addNode, onNodesChange, onEdgesChange, onConnect } = useStore(
    storeSelector,
    shallow
  );

  const createNodeData = (nodeIdentifier, nodeType) => {
    let initialData = { id: nodeIdentifier, nodeType: `${nodeType}` };
    return initialData;
  };

  const handleNodeDrop = useCallback(
    (evt) => {
      evt.preventDefault();

      const flowBounds = flowWrapperRef.current.getBoundingClientRect();
      const droppedData = evt.dataTransfer.getData('application/reactflow');

      if (droppedData) {
        const parsedData = JSON.parse(droppedData);
        const { nodeType } = parsedData;

        if (typeof nodeType === 'undefined' || !nodeType) {
          return;
        }

        const dropPosition = flowInstance.project({
          x: evt.clientX - flowBounds.left,
          y: evt.clientY - flowBounds.top,
        });

        const newNodeId = getNodeID(nodeType);
        const nodeToAdd = {
          id: newNodeId,
          type: nodeType,
          position: dropPosition,
          data: createNodeData(newNodeId, nodeType),
        };

        addNode(nodeToAdd);
      }
    },
    [flowInstance, getNodeID, addNode]
  );

  const handleDragOver = useCallback((evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div ref={flowWrapperRef} className="w-full h-[calc(100vh-96px)] sm:h-[calc(100vh-88px)] bg-gradient-to-br from-blue-50 to-indigo-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={handleNodeDrop}
        onDragOver={handleDragOver}
        onInit={setFlowInstance}
        nodeTypes={NODE_TYPE_MAP}
        edgeTypes={EDGE_TYPE_MAP}
        proOptions={FLOW_OPTIONS}
        snapGrid={[GRID_SPACING, GRID_SPACING]}
        connectionLineType="smoothstep"
      >
        <Background color="#94a3b8" gap={GRID_SPACING} variant="dots" />
        <Controls className="bg-white rounded-lg shadow-md border border-gray-200" />
        <MiniMap
          nodeColor={getNodeColorByType}
          nodeStrokeColor={getNodeBorderColor}
          nodeStrokeWidth={3}
          nodeBorderRadius={10}
          pannable
          zoomable
          maskColor="rgba(59, 130, 246, 0.15)"
          className="bg-white border-2 border-blue-200 rounded-xl shadow-lg"
        />
      </ReactFlow>
    </div>
  );
};

export default PipelineUI;
