package main

import (
	"reflect"
	"testing"
)

func TestManipulate(t *testing.T) {
	test1 := "a"
	answer1 := []string{"a"}

	test2 := "ab"
	answer2 := []string{"ab", "ba"}

	test3 := "abc"
	answer3 := []string{"abc", "acb", "bac", "bca", "cab", "cba"}

	test4 := "aabb"
	answer4 := []string{"aabb", "abab", "abba", "baab", "baba", "bbaa"}

	test5 := "aa bb"
	answer5 := []string{"aabb", "abab", "abba", "baab", "baba", "bbaa"}

	resultTest1 := Manipulate(test1)
	t.Log("TEST 1: ", resultTest1)
	if !reflect.DeepEqual(resultTest1, answer1) {
		t.Errorf("For input '%s', result = %v; want %v", test1, resultTest1, answer1)
	}

	resultTest2 := Manipulate(test2)
	t.Log("TEST 2: ", resultTest2)
	if !reflect.DeepEqual(resultTest2, answer2) {
		t.Errorf("For input '%s', result = %v; want %v", test2, resultTest2, answer2)
	}

	resultTest3 := Manipulate(test3)
	t.Log("TEST 3: ", resultTest3)
	if !reflect.DeepEqual(resultTest3, answer3) {
		t.Errorf("For input '%s', result = %v; want %v", test3, resultTest3, answer3)
	}

	resultTest4 := Manipulate(test4)
	t.Log("TEST 4: ", resultTest4)
	if !reflect.DeepEqual(resultTest4, answer4) {
		t.Errorf("For input '%s', result = %v; want %v", test4, resultTest4, answer4)
	}

	resultTest5 := Manipulate(test5)
	t.Log("TEST 5: ", resultTest5)
	if !reflect.DeepEqual(resultTest5, answer5) {
		t.Errorf("For input '%s', result = %v; want %v", test5, resultTest5, answer5)
	}

}
