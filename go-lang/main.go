package main

import (
	"encoding/json"
	"fmt"
	"math"
	"time"
)

func runVariables() {
	// variables and const
	fmt.Println("---- runVariables ---")
	var a = "initial"
	fmt.Println(a)

	var b, c int = 1, 2
	fmt.Println(b, c)

	var d = true
	fmt.Println(d)

	var e int
	fmt.Println(e)

	f := "apple"
	fmt.Println(f)

	const name = "Gustavo"
	// name = "asd"
	fmt.Println(name)
}

func runPointers() {
	fmt.Println("---- runPointers ---")
	i := 42

	p := &i         // point to i
	fmt.Println(*p) // read i through the pointer
	*p = 21         // set i through the pointer
	fmt.Println(i)  // see the new value of i
}

func runStatements() {
	fmt.Println("---- runStatements ---")
	// statements: and, or, negative
	fmt.Println("go" + "lang")
	fmt.Println("1+1 =", 1+1)
	fmt.Println("7.0/3.0 =", 7.0/3.0)
	fmt.Println(true && false)
	fmt.Println(true || false)
	fmt.Println(!true)
}

func runArrays() {
	fmt.Println("---- runArrays ---")
	// arrays: defined and generic
	var skills [2]string
	skills[0] = "Test A"
	skills[1] = "Test B"
	fmt.Println(skills)

	primes := [6]int{2, 3, 5, 7, 11, 13}
	fmt.Println(primes)

	var s []int = primes[1:4]
	fmt.Println(s)
	fmt.Println(primes)
	fmt.Println(len(primes))
}

func runSlices() {
	fmt.Println("---- runSlices ---")
	// append to a slice
	var slice []int
	slice = append(slice, 1)
	slice = append(slice, 99)
	fmt.Println((slice))
}

func runFor() {
	fmt.Println("---- runFor ---")
	// for each / loop
	primes := [6]int{2, 3, 5, 7, 11, 13}
	fmt.Println(primes)

	for i := 0; i < len(primes); i++ {
		fmt.Println(primes[i])
	}
}

func runTypeStruct() {
	fmt.Println("---- runTypeStruct ---")
	// type struct
	type Test struct {
		A string
		B string
	}

	data := Test{"Gus", "Ise"}
	fmt.Println(data, data.A)
}

func runMap() {
	fmt.Println("---- runMap ---")
	// Map
	m := make(map[string]int)

	m["gus"] = 34
	m["bru"] = 33

	fmt.Println(m)
}

func runJSON() {
	fmt.Println("---- runJSON ---")
	// JSON
	type Message struct {
		Name string
		Body string
	}
	msg := Message{"Gustavo", "Message for you"}

	by, _ := json.Marshal(msg)
	fmt.Println(string(by))
}

func runIfElse() {
	fmt.Println("---- runIfElse ---")
	// There is no ternary if in Go
	if 7%2 == 0 {
		fmt.Println("7 is even")
	} else {
		fmt.Println("7 is odd")
	}

	if 8%2 == 0 {
		fmt.Println("8 is even")
	}

	num := 9
	if num > 10 {
		fmt.Println("Nope")
	} else if num > 11 {
		fmt.Println("Nope")
	} else {
		fmt.Println("Your are on ELSE")
	}
}

func runSwitch() {
	fmt.Println("---- runSwitch ---")
	switch time.Now().Weekday() {
	case time.Saturday, time.Sunday:
		fmt.Println("It's the weekend")
	case time.Wednesday:
		fmt.Println("It's Wednesday!")
	default:
		fmt.Println("It's a weekday")
	}
}

func runRange() {
	fmt.Println("---- runRange ---")
	// range iterates over elements in a variety of data structures.
	var pow = []int{1, 2, 4, 8}

	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
	}
}

func functionWithReturn(a int, b int) int {
	return a + b
}
func runFunctionWithReturn() {
	fmt.Println("---- runFunctionWithReturn ---")
	r := functionWithReturn(1, 2)
	fmt.Println(r)
}

func runFunctionWithMultipleReturn() {
	fmt.Println("---- runFunctionWithMultipleReturn ---")
	vals := func() (int, int) {
		return 3, 7
	}

	a, b := vals()
	fmt.Println(a, b)

	_, c := vals()
	fmt.Println(c)
}

var p, c, r = 0, 1, 0

func fibonacci() int {
	r = p + c
	p = c
	c = r

	return r
}
func runFibonacci() {
	fmt.Println("---- runFibonacci ---")
	for i := 0; i < 10; i++ {
		fmt.Println(fibonacci())
	}
}

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func runMethod() {
	fmt.Println("---- runMethod ---")
	v := Vertex{3, 4}
	fmt.Println(v.Abs())
}

func main() {
	runVariables()
	runPointers()
	runStatements()
	runArrays()
	runSlices()
	runFor()
	runTypeStruct()
	runMap()
	runJSON()
	runIfElse()
	runSwitch()
	runRange()

	runFunctionWithReturn()
	runFunctionWithMultipleReturn()
	runFibonacci()
	runMethod()
	// runServer()
}
