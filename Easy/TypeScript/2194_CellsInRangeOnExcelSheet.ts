function cellsInRange(s: string): string[] {
	let letters = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	let arr = [];

	for (let i = letters.indexOf(s[0]); i <= letters.indexOf(s[3]); i++) {
		for (let j = Number(s[1]); j <= Number(s[4]); j++) {
			arr.push(letters[i] + j);
		}
	}

	return arr;
}

// Time Complexity: O(n * m)
// Space Complexity: O(n * m)
