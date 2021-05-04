// Created by Daniel Pawelko
// Made on May 2021
//
// This go code does mathematical calculations

package main

import (
    "fmt"
    "math"
)

func main() {
    // Math Function
    fmt.Println("9 + 2 = ", (9 + 2))
    fmt.Println("7 - 3 = ", (7 - 3))
    fmt.Println("4 * 2 = ", (4 * 2))
    fmt.Println("4 + 4 / 2 = ", (4 + (4 / 2)))
    fmt.Println("5 + 2³ = ", (5 + math.Pow(2, 3)))
}