function checkIfPangram(sentence: string): boolean {
	if (sentence.length < 26) {
		return false;
	}

	let letters = "abcdefghijklmnopqrstuvwxyz";

	for (let i = 0; i < letters.length; i++) {
		if (!sentence.toLowerCase().includes(letters[i])) {
			return false;
		}
	}

	return true;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
