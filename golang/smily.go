package main

func CountSmilyFace(smileys []string) int {
	typeSmileys := map[string]bool{
		":~)": true,
		":-)": true,
		":~D": true,
		":-D": true,
		":)":  true,
		":D":  true,
		";-)": true,
		";~)": true,
		";~D": true,
		";-D": true,
		";)":  true,
		";D":  true,
	}
	total := 0

	for _, smile := range smileys {
		if _, ok := typeSmileys[smile]; ok {
			total++
		}
	}

	return total
}
