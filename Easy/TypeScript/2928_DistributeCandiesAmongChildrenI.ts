function distributeCandies(n: number, limit: number): number {
	let count = 0;

	for (let i = 0; i <= Math.min(limit, n); i++) {
		for (let j = 0; j <= Math.min(limit, n - i); j++) {
			const k = n - i - j;
			if (k >= 0 && k <= limit) count++;
		}
	}

	return count;
}

// Time Complexity: O(limit²)
// Space Complexity: O(1)
