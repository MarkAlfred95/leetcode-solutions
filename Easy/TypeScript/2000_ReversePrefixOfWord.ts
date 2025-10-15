function reversePrefix(word: string, ch: string): string {
	if (!word.includes(ch)) return word;
	let arr = [];
	let idx = 1;

	for (let i = 0; i < word.length; i++) {
		if (word[i] !== ch) {
			arr.unshift(word[i]);
		}

		if (word[i] === ch) {
			arr.unshift(ch);
			break;
		}

		idx++;
	}

	return arr.join("") + word.slice(idx);
}

// Time Complexity: O(n)
// Space Complexity: O(n)
