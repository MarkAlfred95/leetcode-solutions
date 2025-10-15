function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
	return word1.join("") === word2.join("");
}

// Time Complexity: O(n + m) where n and m are the total lengths of all strings in word1 and word2.
// Space Complexity: O(n + m)
