# Backend - Pipeline Validation API

FastAPI backend for validating ReactFlow pipeline graphs.

## Features

- ✅ DAG (Directed Acyclic Graph) validation
- ✅ Pipeline structure validation
- ✅ Cycle detection
- ✅ Connectivity validation
- ✅ Start/End node detection
- ✅ Request/Response logging

## Installation

Activate your virtual environment and install dependencies:

```bash
source venv/bin/activate
pip install -r requirements.txt
```

## Running the Server

```bash
python main.py
```

Or with uvicorn directly:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

## API Endpoints

### GET /
Health check endpoint
- Returns: `{"Ping": "Pong"}`

### POST /pipelines/parse
Validate a pipeline graph
- Request body: JSON with `nodes` and `edges` arrays
- Response: Validation results with DAG and pipeline status

## Dependencies

- fastapi==0.115.6
- pydantic==2.10.4
- python-multipart==0.0.20
- uvicorn==0.34.0

## Project Structure

```
backend/
├── main.py              # FastAPI application
├── models.py            # Pydantic models
├── validation.py        # Graph validation logic
├── logger.py            # Request/response logging
├── requirements.txt     # Python dependencies
└── pipeline_logs.md     # Validation logs
```
