import React from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';

export const ValidationModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold text-blue-600 mb-8">Validation Report</h2>

        <div className="grid grid-cols-2 gap-5 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 text-center border-2 border-blue-200">
            <div className="text-sm font-medium text-blue-600 mb-2">Total Nodes</div>
            <div className="text-4xl font-bold text-blue-700">{data.num_nodes}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 text-center border-2 border-purple-200">
            <div className="text-sm font-medium text-purple-600 mb-2">Total Edges</div>
            <div className="text-4xl font-bold text-purple-700">{data.num_edges}</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className={`flex items-center justify-between p-5 rounded-xl border-2 ${
            data.is_dag 
              ? 'bg-emerald-50 border-emerald-200' 
              : 'bg-rose-50 border-rose-200'
          }`}>
            <div className="flex items-center gap-3">
              {data.is_dag ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              ) : (
                <AlertCircle className="w-6 h-6 text-rose-600" />
              )}
              <span className="font-semibold text-gray-800">DAG Validation</span>
            </div>
            <span className={`text-sm font-bold px-3 py-1 rounded-full ${
              data.is_dag 
                ? 'bg-emerald-200 text-emerald-700' 
                : 'bg-rose-200 text-rose-700'
            }`}>
              {data.is_dag ? 'PASS' : 'FAIL'}
            </span>
          </div>

          <div className={`flex items-center justify-between p-5 rounded-xl border-2 ${
            data.is_pipeline 
              ? 'bg-emerald-50 border-emerald-200' 
              : 'bg-rose-50 border-rose-200'
          }`}>
            <div className="flex items-center gap-3">
              {data.is_pipeline ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              ) : (
                <AlertCircle className="w-6 h-6 text-rose-600" />
              )}
              <span className="font-semibold text-gray-800">Pipeline Check</span>
            </div>
            <span className={`text-sm font-bold px-3 py-1 rounded-full ${
              data.is_pipeline 
                ? 'bg-emerald-200 text-emerald-700' 
                : 'bg-rose-200 text-rose-700'
            }`}>
              {data.is_pipeline ? 'PASS' : 'FAIL'}
            </span>
          </div>
        </div>

        {data.dag_validation_messages && data.dag_validation_messages.length > 0 && (
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
            <div className="text-sm font-medium text-yellow-800 mb-1">Validation Messages:</div>
            <ul className="text-xs text-yellow-700 space-y-1">
              {data.dag_validation_messages.map((msg, idx) => (
                <li key={idx}>• {msg}</li>
              ))}
            </ul>
          </div>
        )}

        {data.pipeline_validation_messages && data.pipeline_validation_messages.length > 0 && (
          <div className="mt-2 p-3 bg-yellow-50 rounded-lg">
            <ul className="text-xs text-yellow-700 space-y-1">
              {data.pipeline_validation_messages.map((msg, idx) => (
                <li key={idx}>• {msg}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValidationModal;
