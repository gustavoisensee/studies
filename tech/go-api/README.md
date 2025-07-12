# Todo API

A simple REST API for managing todos built with Go, Gin, and SQLite.

## Prerequisites

- Go 1.16 or higher
- SQLite3

## Installation

1. Clone the repository
2. Install dependencies:
```bash
go mod download
```

## Running the Application

```bash
go run main.go
```

The server will start on `http://localhost:8080`

## API Endpoints

### Get all todos
```
GET /todos
```

### Get a specific todo
```
GET /todos/:id
```

### Create a new todo
```
POST /todos
Content-Type: application/json

{
    "title": "Your todo title"
}
```

### Update a todo
```
PUT /todos/:id
Content-Type: application/json

{
    "title": "Updated title",
    "completed": true
}
```

### Delete a todo
```
DELETE /todos/:id
```

## Response Format

### Todo Object
```json
{
    "id": 1,
    "title": "Example todo",
    "completed": false,
    "created_at": "2024-03-21T10:00:00Z"
}
```

## Error Responses

The API returns appropriate HTTP status codes and error messages in JSON format:

```json
{
    "error": "Error message description"
}
``` 