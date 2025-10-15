function mostWordsFound(sentences: string[]): number {
	let words = [];

	for (let i = 0; i < sentences.length; i++) {
		let count = 1;
		for (let j = 0; j < sentences[i].length; j++) {
			if (sentences[i][j] === " ") {
				count++;
			}
		}
		words.push(count);
	}

	return Math.max(...words);
}

// Time Complexity: O(n · m) where n is the number of sentences and m is the average length of each sentence.
// Space Complexity: O(n)
