from typing import List, Optional
from pydantic import BaseModel

class Position(BaseModel):
    x: float
    y: float

class Style(BaseModel):
    strokeWidth: Optional[int] = None
    stroke: Optional[str] = None

class MarkerEnd(BaseModel):
    type: str
    width: Optional[int] = None
    height: Optional[int] = None
    color: Optional[str] = None

class NodeData(BaseModel):
    id: str
    nodeType: str

class Node(BaseModel):
    id: str
    type: str
    position: Position
    data: NodeData
    width: Optional[int] = None
    height: Optional[int] = None
    selected: Optional[bool] = False
    dragging: Optional[bool] = False

class Edge(BaseModel):
    source: str
    target: str
    id: str
    type: Optional[str] = None
    deletable: Optional[bool] = False
    style: Optional[Style] = None
    markerEnd: Optional[MarkerEnd] = None
    animated: Optional[bool] = False
    sourceHandle: Optional[str] = None
    targetHandle: Optional[str] = None

class PipelineRequest(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

class PipelineResponse(BaseModel):
    num_nodes: int
    num_edges: int
    is_dag: bool
    is_pipeline: bool
    dag_validation_messages: List[str]
    pipeline_validation_messages: List[str]
