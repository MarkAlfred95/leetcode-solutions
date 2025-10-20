function prefixCount(words: string[], pref: string): number {
	let ctr = 0;

	for (let i = 0; i < words.length; i++) {
		if (words[i].startsWith(pref)) {
			ctr++;
		}
	}

	return ctr;
}

// Time Complexity: O(n · m) where n is the number of words and m is the length of pref.
// Space Complexity: O(1)
