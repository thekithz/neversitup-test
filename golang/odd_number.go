package main

func FindOddNumber(nums []int) int {
	models := make(map[int]int)

	for _, num := range nums {
		models[num]++
	}

	for num, count := range models {
		if count%2 != 0 {
			return num
		}
	}

	return 0
}
