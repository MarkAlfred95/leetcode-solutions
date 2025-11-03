function uniqueMorseRepresentations(words: string[]): number {
	let morse = [
		".-",
		"-...",
		"-.-.",
		"-..",
		".",
		"..-.",
		"--.",
		"....",
		"..",
		".---",
		"-.-",
		".-..",
		"--",
		"-.",
		"---",
		".--.",
		"--.-",
		".-.",
		"...",
		"-",
		"..-",
		"...-",
		".--",
		"-..-",
		"-.--",
		"--..",
	];

	let arr = new Set();

	for (let i = 0; i < words.length; i++) {
		let code = "";
		for (let j = 0; j < words[i].length; j++) {
			let char = words[i][j].charCodeAt(0) - 96;
			code += morse[char - 1];
		}
		arr.add(code);
	}

	return arr.size;
}

// Time Complexity: O(n * m)
// Space Complexity: O(n)
