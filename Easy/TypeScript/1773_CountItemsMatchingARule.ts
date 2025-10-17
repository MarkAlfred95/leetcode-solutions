function countMatches(
	items: string[][],
	ruleKey: string,
	ruleValue: string
): number {
	let count = 0;

	for (let i = 0; i < items.length; i++) {
		if (ruleKey === "type") {
			if (ruleValue === items[i][0]) {
				count++;
			}
		} else if (ruleKey === "color") {
			if (ruleValue === items[i][1]) {
				count++;
			}
		} else {
			if (ruleValue === items[i][2]) {
				count++;
			}
		}
	}

	return count;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
