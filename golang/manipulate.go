package main

import (
	"sort"
	"strings"
)

func Manipulate(text string) []string {
	totalText := len(text)

	if totalText == 1 {
		return []string{text}
	}

	text = strings.ReplaceAll(text, " ", "")

	textSplit := strings.Split(text, "")
	forCollectText := strings.Split(text, "")
	var result []string

	for i := 0; i < len(textSplit); i++ {
		newTextSplit := append([]string(nil), textSplit...)
		collectText := forCollectText[0]
		forCollectText = forCollectText[1:]
		newTextSplit = append(newTextSplit[:i], newTextSplit[i+1:]...)
		for j := 0; j < len(newTextSplit); j++ {
			s := collectText + strings.Join(newTextSplit, "")
			result = append(result, s)
			sSub := newTextSplit[0]
			newTextSplit = newTextSplit[1:]
			newTextSplit = append(newTextSplit, sSub)
		}
	}

	removeDup := make(map[string]bool)
	for _, item := range result {
		removeDup[item] = true
	}

	var resultFinal []string
	for item := range removeDup {
		resultFinal = append(resultFinal, item)
	}

	sort.Strings(resultFinal)

	return resultFinal
}
