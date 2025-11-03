function maxDepth(s: string): number {
	if (!s.includes("(") || !s.includes(")")) {
		return 0;
	}

	let max = [];
	let len = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(") {
			len++;
		} else if (s[i] === ")") {
			max.push(len);
			len--;
		} else {
			continue;
		}
	}

	return Math.max(...max);
}

// Time Complexity: O(n)
// Space Complexity: O(n)
