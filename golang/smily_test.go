package main

import (
	"testing"
)

func TestCountSmilyFace(t *testing.T) {
	test1 := []string{":)", ";(", ";}", ":-D"}
	test2 := []string{";D", ":-(", ":-)", ";~)"}
	test3 := []string{";]", ":[", ";*", ":$", ";-D"}

	resultTest1 := CountSmilyFace(test1)
	t.Log("TEST 1: ", resultTest1)
	if resultTest1 != 2 {
		t.Errorf("result 1 = %d; want 2", resultTest1)
	}

	resultTest2 := CountSmilyFace(test2)
	t.Log("TEST 2: ", resultTest2)
	if resultTest2 != 3 {
		t.Errorf("result 2 = %d; want 3", resultTest2)
	}

	resultTest3 := CountSmilyFace(test3)
	t.Log("TEST 3: ", resultTest3)
	if resultTest3 != 1 {
		t.Errorf("result 3 = %d; want 1", resultTest3)
	}
}
