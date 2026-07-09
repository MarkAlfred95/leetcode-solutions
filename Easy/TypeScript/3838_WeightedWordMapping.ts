function mapWordWeights(words: string[], weights: number[]): string {
	const rev = "zyxwvutsrqponmlkjihgfedcba";
	let ans = "";

	for (let i = 0; i < words.length; i++) {
		let sum = 0;
		for (let j = 0; j < words[i].length; j++) {
			sum += weights[words[i].charCodeAt(j) - 97];
		}
		ans += rev[sum % 26];
	}

	return ans;
}

// Time Complexity: O(m), where m is the total number of characters in all words combined
// Space Complexity: O(1)
