import React, { useState } from 'react';
import axios from 'axios';
import { Send } from 'lucide-react';
import clsx from 'clsx';
import Button from './ui/button';
import { useStore } from '../store';
import ValidationModal from './ValidationModal';

export const SubmitButton = ({ className = '' }) => {
  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [pipelineResults, setPipelineResults] = useState(null);
  const currentNodes = useStore((state) => state.getNodes ? state.getNodes() : state.nodes);
  const currentEdges = useStore((state) => state.getEdges ? state.getEdges() : state.edges);

  const validatePipeline = async () => {
    setSubmitting(true);
    try {
      const apiEndpoint = `${process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000'}/pipelines/parse`;
      const result = await axios.post(apiEndpoint, { nodes: currentNodes, edges: currentEdges });

      setPipelineResults(result.data);
      setModalOpen(true);

      console.log('Validation successful:', result.data);
    } catch (err) {
      alert(`Validation Error:\n\n${err.message}`);
      console.error('Validation error occurred', err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button
        className={clsx('h-12 w-12 bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md hover:shadow-lg', className)}
        onClick={validatePipeline}
        disabled={submitting}
      >
        <Send className="w-6 h-6" />
      </Button>
      <ValidationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        data={pipelineResults} 
      />
    </>
  );
};

export default SubmitButton;
