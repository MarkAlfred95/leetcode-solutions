function maximumWealth(accounts: number[][]): number {
	let max = 0;
	for (const acc of accounts) {
		const sum = acc.reduce((a, b) => a + b, 0);
		if (sum > max) max = sum;
	}
	return max;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
