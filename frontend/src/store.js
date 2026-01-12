import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from 'reactflow';

const EDGE_ARROW_CONFIG = {
  type: MarkerType.ArrowClosed,
  width: 14,
  height: 14,
  color: '#94a3b8',
};

export const useStore = create(
  persist(
    (set, get) => ({
      // Application State
      nodes: [],
      edges: [],
      nodeIDs: {},
      pipelineStats: null,
      isStatsDialogOpen: false,
      validationMessages: [],
      showConfetti: false,
      isCustomEdge: true,
      isAnimated: true,
      isMenuOpen: false,

      // State Accessors
      getNodes: () => get().nodes,
      getEdges: () => get().edges,
      getNodeID: (nodeType) => {
        const idRegistry = { ...get().nodeIDs };
        if (idRegistry[nodeType] === undefined) {
          idRegistry[nodeType] = 0;
        }
        idRegistry[nodeType] += 1;
        set({ nodeIDs: idRegistry });
        return `${nodeType}-${idRegistry[nodeType]}`;
      },

      // Node Management
      addNode: (newNode) => {
        set({
          nodes: [...get().nodes, newNode],
        });
      },
      onNodesChange: (nodeChanges) => {
        set({
          nodes: applyNodeChanges(nodeChanges, get().nodes),
        });
      },
      updateNodeField: (nodeId, field, value) => {
        set({
          nodes: get().nodes.map((node) => {
            if (node.id === nodeId) {
              node.data = { ...node.data, [field]: value };
            }
            return node;
          }),
        });
      },
      removeNode: (targetNodeId) => {
        set({
          nodes: get().nodes.filter((node) => node.id !== targetNodeId),
          edges: get().edges.filter(
            (edge) => edge.source !== targetNodeId && edge.target !== targetNodeId
          ),
        });
      },

      // Edge Management
      onEdgesChange: (edgeChanges) => {
        set({
          edges: applyEdgeChanges(edgeChanges, get().edges),
        });
      },
      setEdges: (edgeUpdater) => {
        set({
          edges: typeof edgeUpdater === 'function' ? edgeUpdater(get().edges) : edgeUpdater,
        });
      },
      onConnect: (newConnection) => {
        set({
          edges: addEdge(
            {
              ...newConnection,
              type: get().isCustomEdge ? 'custom' : 'base',
              animated: get().isAnimated,
              markerEnd: EDGE_ARROW_CONFIG,
            },
            get().edges
          ),
        });
      },
      setPipelineStats: (statistics) =>
        set({
          pipelineStats: statistics,
          showConfetti: statistics?.is_dag && statistics?.is_pipeline,
        }),
      setStatsDialogOpen: (dialogOpen) =>
        set((state) => ({
          isStatsDialogOpen: dialogOpen,
          pipelineStats: dialogOpen ? state.pipelineStats : null,
          showConfetti: dialogOpen ? state.showConfetti : false,
        })),
      toggleEdgeType: () =>
        set((state) => {
          const enableCustomEdge = !state.isCustomEdge;
          return {
            isCustomEdge: enableCustomEdge,
            edges: state.edges.map((edge) => ({
              ...edge,
              type: enableCustomEdge ? 'custom' : 'base',
              deletable: enableCustomEdge,
            })),
          };
        }),
      toggleAnimation: () =>
        set((state) => {
          const enableAnimation = !state.isAnimated;
          return {
            isAnimated: enableAnimation,
            edges: state.edges.map((edge) => ({
              ...edge,
              animated: enableAnimation,
            })),
          };
        }),
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    }),
    {
      name: 'flow-pipeline-storage',
      partialize: (state) => ({
        nodes: state.nodes,
        edges: state.edges,
        nodeIDs: state.nodeIDs,
        isCustomEdge: state.isCustomEdge,
        isAnimated: state.isAnimated,
      }),
    }
  )
);
