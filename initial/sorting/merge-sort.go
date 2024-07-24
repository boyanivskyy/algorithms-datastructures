package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	start := time.Now();
	// defer func() {
	// 	fmt.Printf("mergeSort() for 7 items took %v\n", time.Since(start))
	// }()
	// fmt.Println("mergeSort()", mergeSort([]int{1, 10, 50, 2, 14, 99, 100}))

	defer func() {
		fmt.Printf("mergeSort() for 1k items took %v\n", time.Since(start))
	}()
	param := []int{}
	// randomize 10k unsorted items for param slice
	for i := 0; i < 10000; i++ {
		param = append(param, rand.Intn(10000))
	}

	fmt.Println("mergeSort()", mergeSort(param))
}

func mergeSort(arr []int) []int {

	if len(arr) <= 1 {
		return arr
	}

	mid := len(arr) / 2
	left := mergeSort(arr[:mid])
	right := mergeSort(arr[mid:])

	return merge(left, right)
}

func merge(arr1 []int, arr2 []int) []int {
	i := 0
	j := 0
	res := []int{}

	for i < len(arr1) && j < len(arr2) {
		if arr1[i] < arr2[j] {
			res = append(res, arr1[i])
			i++
		} else {
			res = append(res, arr2[j])
			j++
		}
	}

	if i < len(arr1) {
		res = append(res, arr1[i:]...)
	}

	if j < len(arr2) {
		res = append(res, arr2[j:]...)
	}

	return res;
}