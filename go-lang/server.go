package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func hello(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "hello\n")
}

func headers(w http.ResponseWriter, req *http.Request) {
	for name, headers := range req.Header {
		for _, h := range headers {
			fmt.Fprintf(w, "%v: %v\n", name, h)
		}
	}
}

type Test struct {
	A string
	B string
}

func jsonResponse(w http.ResponseWriter, req *http.Request) {
	data := Test{"Gus", "Ise"}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(data)
}

func runServer() {
	http.HandleFunc("/hello", hello)
	http.HandleFunc("/json", jsonResponse)
	http.HandleFunc("/headers", headers)

	http.ListenAndServe(":8090", nil)
}
