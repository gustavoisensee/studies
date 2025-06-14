# Todo REST API with FastAPI and SQLite

A simple REST API for managing todos built with Python, FastAPI and SQLite.


| Docs | Redoc |
| --- | --- |
| ![Docs](https://github.com/gustavoisensee/studies/blob/28eca90568af3d0577c8f6e340c2d12f0ed3594f/tech/python-api/assets/docs.png) | ![Redoc](https://github.com/gustavoisensee/studies/blob/28eca90568af3d0577c8f6e340c2d12f0ed3594f/tech/python-api/assets/redoc.png) |

## Setup

1. Create a virtual environment with Python 3.9:
```bash
python3.9 -m venv venv
```

2. Activate the virtual environment:
```bash
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Initialize the database:
```bash
python init_db.py
```

## Running the Application

To start the server:
```bash
python -m uvicorn main:app --reload
```

The API will be available at:
- Main API: http://127.0.0.1:8000
- Interactive API documentation: http://127.0.0.1:8000/docs
- Alternative API documentation: http://127.0.0.1:8000/redoc

## API Endpoints

- `GET /todos/` - List all todos
- `POST /todos/` - Create a new todo
- `GET /todos/{todo_id}` - Get a specific todo
- `PUT /todos/{todo_id}` - Update a todo
- `DELETE /todos/{todo_id}` - Delete a todo 
