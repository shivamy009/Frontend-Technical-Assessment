import React, { useState, useEffect, useMemo } from 'react';
import { useUpdateNodeInternals } from 'reactflow';
import { FileText } from 'lucide-react';
import NodeWrapper from './node-wrapper';
import AutosizeTextarea from '../ui/autosize-textarea';
import { useNodeHandles } from '../../hooks/useNodeHandles';

const parseVariablesFromText = (content) => {
  const variablePattern = /{{(.*?)}}/g;
  const matches = content.matchAll(variablePattern);
  return Array.from(matches)
    .map((match) => match[1].trim())
    .filter((v) => v.length > 0);
};

export const TextNode = ({ id, data }) => {
  const [content, setContent] = useState(data?.text || '{{input}}');
  const refreshNodeHandles = useUpdateNodeInternals();

  const detectedVariables = useMemo(() => parseVariablesFromText(content), [content]);
  const nodeHandles = useNodeHandles(id, detectedVariables);

  useEffect(() => {
    refreshNodeHandles(id);
  }, [id, detectedVariables, refreshNodeHandles]);

  return (
    <NodeWrapper id={id} title="Text Node" icon={FileText} handles={nodeHandles}>
      <AutosizeTextarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border-blue-300 focus:ring-2 focus:ring-blue-400"
        placeholder="Type text with {{variableName}} syntax"
      />
    </NodeWrapper>
  );
};

export default TextNode;
