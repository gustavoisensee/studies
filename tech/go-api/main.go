package main

import (
	"log"
	"todo-api/database"
	"todo-api/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize database
	db, err := database.InitDB()
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Create router
	r := gin.Default()

	// Initialize handlers
	todoHandler := handlers.NewTodoHandler(db)

	// Routes
	// curl -sX GET http://localhost:8080/todos | jq
	r.GET("/todos", todoHandler.GetTodos)

	// curl -X GET http://localhost:8080/todos/1 | jq
	r.GET("/todos/:id", todoHandler.GetTodo)

	// curl -X POST http://localhost:8080/todos -d '{"title": "New Todo"}' | jq
	r.POST("/todos", todoHandler.CreateTodo)

	// curl -X PUT http://localhost:8080/todos/1 -d '{"title": "Updated Todo"}' | jq
	r.PUT("/todos/:id", todoHandler.UpdateTodo)

	// curl -X DELETE http://localhost:8080/todos/1
	r.DELETE("/todos/:id", todoHandler.DeleteTodo)

	// Start server
	if err := r.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}
