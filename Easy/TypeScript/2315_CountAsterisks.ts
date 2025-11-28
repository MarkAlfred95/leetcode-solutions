function countAsterisks(s: string): number {
	let lctr = 0;
	let ctr = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "|") {
			lctr++;
		}
		if (lctr % 2 === 0 && s[i] === "*") {
			ctr++;
		}
	}

	return ctr;
}

// Time Complexity: O(n);
// Space Complexity: O(1);
