package main

import "testing"

func TestFindOddNumber(t *testing.T) {
	test1 := []int{7}
	test2 := []int{0}
	test3 := []int{1, 1, 2}
	test4 := []int{0, 1, 0, 1, 0}
	test5 := []int{1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1}

	resultTest1 := FindOddNumber(test1)
	t.Log("TEST 1: ", resultTest1)
	if resultTest1 != 7 {
		t.Errorf("result 1 = %d; want 7", resultTest1)
	}

	resultTest2 := FindOddNumber(test2)
	t.Log("TEST 2: ", resultTest2)
	if resultTest2 != 0 {
		t.Errorf("result 2 = %d; want 0", resultTest2)
	}

	resultTest3 := FindOddNumber(test3)
	t.Log("TEST 3: ", resultTest3)
	if resultTest3 != 2 {
		t.Errorf("result 3 = %d; want 2", resultTest3)
	}

	resultTest4 := FindOddNumber(test4)
	t.Log("TEST 4: ", resultTest4)
	if resultTest4 != 0 {
		t.Errorf("result 4 = %d; want 0", resultTest4)
	}

	resultTest5 := FindOddNumber(test5)
	t.Log("TEST 5: ", resultTest5)
	if resultTest5 != 4 {
		t.Errorf("result 5 = %d; want 4", resultTest5)
	}
}
