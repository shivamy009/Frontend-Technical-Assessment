# Pipeline Logs

This file contains logs of all pipeline validation requests.


## Request at 2026-01-11 17:34:36

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-2",
      "type": "customOutput",
      "position": {
        "x": 754.0,
        "y": 340.0
      },
      "data": {
        "id": "customOutput-2",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "customOutput-2",
      "id": "reactflow__edge-customInput-3customInput-3-value-customOutput-2customOutput-2-value",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "customOutput-2-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-11 17:38:35

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-2",
      "type": "customOutput",
      "position": {
        "x": 754.0,
        "y": 340.0
      },
      "data": {
        "id": "customOutput-2",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "customOutput-2",
      "id": "reactflow__edge-customInput-3customInput-3-value-customOutput-2customOutput-2-value",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "customOutput-2-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-11 17:38:48

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-2",
      "type": "customOutput",
      "position": {
        "x": 754.0,
        "y": 340.0
      },
      "data": {
        "id": "customOutput-2",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": []
}
```

### Pipeline Response
```json
{
  "num_nodes": 2,
  "num_edges": 0,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: nodes exist but no connections between them"
  ]
}
```

---

## Request at 2026-01-11 17:39:22

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-2",
      "type": "customOutput",
      "position": {
        "x": 754.0,
        "y": 340.0
      },
      "data": {
        "id": "customOutput-2",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 153.0
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "filter-1",
      "target": "customOutput-2",
      "id": "reactflow__edge-filter-1filter-1-true-customOutput-2customOutput-2-value",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "filter-1-true",
      "targetHandle": "customOutput-2-value"
    },
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-11 17:43:51

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-2",
      "type": "customOutput",
      "position": {
        "x": 754.0,
        "y": 340.0
      },
      "data": {
        "id": "customOutput-2",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 153.0
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "filter-1",
      "target": "customOutput-2",
      "id": "reactflow__edge-filter-1filter-1-true-customOutput-2customOutput-2-value",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "filter-1-true",
      "targetHandle": "customOutput-2-value"
    },
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-11 17:44:02

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-2",
      "type": "customOutput",
      "position": {
        "x": 754.0,
        "y": 340.0
      },
      "data": {
        "id": "customOutput-2",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 153.0
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-11 17:44:38

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-2",
      "type": "customOutput",
      "position": {
        "x": 754.0,
        "y": 340.0
      },
      "data": {
        "id": "customOutput-2",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 153.0
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-11 17:44:52

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 153.0
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-11 17:44:59

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": true,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 153.0
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-11 17:58:07

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": true,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 153.0
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-11 18:01:30

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 151.7606121885538
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": true,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-12 10:30:35

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 151.7606121885538
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 665.2630664644942,
        "y": 359.456540134403
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 250,
      "height": 160,
      "selected": true,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-12 10:42:38

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 151.7606121885538
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 665.2630664644942,
        "y": 359.456540134403
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 250,
      "height": 160,
      "selected": true,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-12 10:42:45

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 151.7606121885538
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 665.2630664644942,
        "y": 359.456540134403
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 250,
      "height": 160,
      "selected": true,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-12 10:43:22

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 247.0,
        "y": 275.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 151.7606121885538
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 665.2630664644942,
        "y": 359.456540134403
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    },
    {
      "source": "filter-1",
      "target": "http-1",
      "id": "reactflow__edge-filter-1filter-1-true-http-1http-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "filter-1-true",
      "targetHandle": "http-1-input"
    },
    {
      "source": "customInput-3",
      "target": "http-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-http-1http-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "http-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-12 10:50:45

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 224.0,
        "y": 29.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 151.7606121885538
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-12 10:51:28

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 224.0,
        "y": 29.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 151.7606121885538
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": true,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-3",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-3customInput-3-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "customInput-3-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-12 10:52:52

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 224.0,
        "y": 29.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 151.7606121885538
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-2",
      "type": "http",
      "position": {
        "x": 1071.86929852579,
        "y": -12.455094440517144
      },
      "data": {
        "id": "http-2",
        "nodeType": "http"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggregate-2",
      "type": "aggregate",
      "position": {
        "x": 821.8692985257901,
        "y": 38.54490555948286
      },
      "data": {
        "id": "aggregate-2",
        "nodeType": "aggregate"
      },
      "width": 250,
      "height": 140,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-3",
      "type": "customOutput",
      "position": {
        "x": 314.8692985257901,
        "y": 447.54490555948286
      },
      "data": {
        "id": "customOutput-3",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 165.8692985257901,
        "y": 282.54490555948286
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 120,
      "selected": false,
      "dragging": false
    },
    {
      "id": "text-3",
      "type": "text",
      "position": {
        "x": 831.8692985257901,
        "y": 437.54490555948286
      },
      "data": {
        "id": "text-3",
        "nodeType": "text"
      },
      "width": 250,
      "height": 138,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "llm-1",
      "target": "text-3",
      "id": "reactflow__edge-llm-1llm-1-response-text-3text-3-input-gjhghjhjvh",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "llm-1-response",
      "targetHandle": "text-3-input-gjhghjhjvh"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 7,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-12 10:53:00

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 224.0,
        "y": 29.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 151.7606121885538
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-2",
      "type": "http",
      "position": {
        "x": 1071.86929852579,
        "y": -12.455094440517144
      },
      "data": {
        "id": "http-2",
        "nodeType": "http"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggregate-2",
      "type": "aggregate",
      "position": {
        "x": 821.8692985257901,
        "y": 38.54490555948286
      },
      "data": {
        "id": "aggregate-2",
        "nodeType": "aggregate"
      },
      "width": 250,
      "height": 140,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-3",
      "type": "customOutput",
      "position": {
        "x": 314.8692985257901,
        "y": 447.54490555948286
      },
      "data": {
        "id": "customOutput-3",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 165.8692985257901,
        "y": 282.54490555948286
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 120,
      "selected": false,
      "dragging": false
    },
    {
      "id": "text-3",
      "type": "text",
      "position": {
        "x": 831.8692985257901,
        "y": 437.54490555948286
      },
      "data": {
        "id": "text-3",
        "nodeType": "text"
      },
      "width": 250,
      "height": 138,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "llm-1",
      "target": "text-3",
      "id": "reactflow__edge-llm-1llm-1-response-text-3text-3-input-gjhghjhjvh",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "llm-1-response",
      "targetHandle": "text-3-input-gjhghjhjvh"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 7,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-12 10:53:17

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-3",
      "type": "customInput",
      "position": {
        "x": 224.0,
        "y": 29.0
      },
      "data": {
        "id": "customInput-3",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 596.0,
        "y": 151.7606121885538
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 112,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-2",
      "type": "http",
      "position": {
        "x": 1071.86929852579,
        "y": -12.455094440517144
      },
      "data": {
        "id": "http-2",
        "nodeType": "http"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggregate-2",
      "type": "aggregate",
      "position": {
        "x": 567.8692985257901,
        "y": -28.455094440517144
      },
      "data": {
        "id": "aggregate-2",
        "nodeType": "aggregate"
      },
      "width": 250,
      "height": 140,
      "selected": true,
      "dragging": false
    },
    {
      "id": "customOutput-3",
      "type": "customOutput",
      "position": {
        "x": 314.8692985257901,
        "y": 447.54490555948286
      },
      "data": {
        "id": "customOutput-3",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 160,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 165.8692985257901,
        "y": 282.54490555948286
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 120,
      "selected": false,
      "dragging": false
    },
    {
      "id": "text-3",
      "type": "text",
      "position": {
        "x": 831.8692985257901,
        "y": 437.54490555948286
      },
      "data": {
        "id": "text-3",
        "nodeType": "text"
      },
      "width": 250,
      "height": 138,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "llm-1",
      "target": "text-3",
      "id": "reactflow__edge-llm-1llm-1-response-text-3text-3-input-gjhghjhjvh",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "sourceHandle": "llm-1-response",
      "targetHandle": "text-3-input-gjhghjhjvh"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 7,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-12 10:58:51

### Pipeline Request
```json
{
  "nodes": [],
  "edges": []
}
```

### Pipeline Response
```json
{
  "num_nodes": 0,
  "num_edges": 0,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Empty graph (no nodes)"
  ]
}
```

---

## Request at 2026-01-12 11:05:11

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 381.0,
        "y": 230.0
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 876.0,
        "y": 318.0
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-12 11:05:16

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 381.0,
        "y": 230.0
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 876.0,
        "y": 318.0
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": []
}
```

### Pipeline Response
```json
{
  "num_nodes": 2,
  "num_edges": 0,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: nodes exist but no connections between them"
  ]
}
```

---

## Request at 2026-01-12 11:05:22

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 381.0,
        "y": 230.0
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 876.0,
        "y": 318.0
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": []
}
```

### Pipeline Response
```json
{
  "num_nodes": 2,
  "num_edges": 0,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: nodes exist but no connections between them"
  ]
}
```

---

## Request at 2026-01-12 11:14:07

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": true,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 526.7913570490147,
        "y": 174.4336579547078
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 256,
      "height": 132,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    },
    {
      "source": "filter-1",
      "target": "debug-1",
      "id": "reactflow__edge-filter-1filter-1-true-debug-1debug-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "filter-1-true",
      "targetHandle": "debug-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-12 11:19:47

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 526.7913570490147,
        "y": 174.4336579547078
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 256,
      "height": 132,
      "selected": true,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    },
    {
      "source": "filter-1",
      "target": "debug-1",
      "id": "reactflow__edge-filter-1filter-1-true-debug-1debug-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "filter-1-true",
      "targetHandle": "debug-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-12 11:19:51

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 526.7913570490147,
        "y": 174.4336579547078
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 256,
      "height": 132,
      "selected": true,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-12 11:22:59

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 162.5825777522446,
        "y": 803.9407032321129
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-12 11:30:21

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 162.5825777522446,
        "y": 803.9407032321129
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-12 11:31:10

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 162.5825777522446,
        "y": 803.9407032321129
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-12 11:31:42

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 732.5825777522446,
        "y": -50.059296767887076
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    },
    {
      "source": "customInput-1",
      "target": "llm-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-llm-1llm-1-system",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "llm-1-system"
    },
    {
      "source": "filter-1",
      "target": "llm-1",
      "id": "reactflow__edge-filter-1filter-1-true-llm-1llm-1-prompt",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "filter-1-true",
      "targetHandle": "llm-1-prompt"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-12 11:32:42

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 732.5825777522446,
        "y": -50.059296767887076
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    },
    {
      "source": "customInput-1",
      "target": "llm-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-llm-1llm-1-system",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "llm-1-system"
    },
    {
      "source": "filter-1",
      "target": "llm-1",
      "id": "reactflow__edge-filter-1filter-1-true-llm-1llm-1-prompt",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "filter-1-true",
      "targetHandle": "llm-1-prompt"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-12 11:34:37

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 732.5825777522446,
        "y": -50.059296767887076
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": true,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    },
    {
      "source": "customInput-1",
      "target": "llm-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-llm-1llm-1-system",
      "type": "custom",
      "deletable": true,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "llm-1-system"
    },
    {
      "source": "filter-1",
      "target": "llm-1",
      "id": "reactflow__edge-filter-1filter-1-true-llm-1llm-1-prompt",
      "type": "custom",
      "deletable": true,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "filter-1-true",
      "targetHandle": "llm-1-prompt"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-12 11:34:42

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 732.5825777522446,
        "y": -50.059296767887076
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": true,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    },
    {
      "source": "customInput-1",
      "target": "llm-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-llm-1llm-1-system",
      "type": "custom",
      "deletable": true,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "llm-1-system"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2026-01-12 11:34:51

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 732.5825777522446,
        "y": -50.059296767887076
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": true,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-12 11:35:12

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 732.5825777522446,
        "y": -50.059296767887076
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": true,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 1,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-12 11:35:29

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 732.5825777522446,
        "y": -50.059296767887076
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 885.5896313925077,
        "y": 276.9479156816678
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": true,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    },
    {
      "source": "customInput-1",
      "target": "http-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-http-1http-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "http-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 2,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2026-01-12 11:37:09

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 50.835079138520825,
        "y": 186.6407374909652
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 352.52319341675405,
        "y": 407.624091129557
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 256,
      "height": 136,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 885.5896313925077,
        "y": 276.9479156816678
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 256,
      "height": 192,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "source": "customInput-1",
      "target": "filter-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-filter-1filter-1-input",
      "type": "custom",
      "deletable": true,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "filter-1-input"
    },
    {
      "source": "customInput-1",
      "target": "http-1",
      "id": "reactflow__edge-customInput-1customInput-1-value-http-1http-1-input",
      "type": "custom",
      "deletable": false,
      "style": null,
      "markerEnd": {
        "type": "arrowclosed",
        "width": 14,
        "height": 14,
        "color": "#94a3b8"
      },
      "animated": true,
      "sourceHandle": "customInput-1-value",
      "targetHandle": "http-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---
