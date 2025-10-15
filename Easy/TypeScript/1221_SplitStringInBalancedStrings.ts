function balancedStringSplit(s: string): number {
	let l = 0;
	let r = 0;
	let ctr = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "R") {
			r++;
		} else {
			l++;
		}

		if (l === r) {
			ctr++;
		}
	}

	return ctr;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
