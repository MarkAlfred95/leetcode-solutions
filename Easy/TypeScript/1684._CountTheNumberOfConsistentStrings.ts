function countConsistentStrings(allowed: string, words: string[]): number {
	const allowedSet = new Set(allowed);
	let count = 0;

	for (const word of words) {
		let valid = true;
		for (const ch of word) {
			if (!allowedSet.has(ch)) {
				valid = false;
				break;
			}
		}
		if (valid) count++;
	}

	return count;
}

// Time Complexity: O(m · k) where m is the number of words and k is the average length of each word.
// Space Complexity: O(1)
