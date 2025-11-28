function smallestNumber(n: number): number {
	if (n == 1) return 1;
	let num = 1;

	while (num <= n) {
		num = num * 2;
	}

	return num - 1;
}

// Time Complexity: O(log n)
// Space Complexity: O(1)
