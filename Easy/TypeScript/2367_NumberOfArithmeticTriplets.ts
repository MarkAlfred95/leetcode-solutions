function arithmeticTriplets(nums: number[], diff: number): number {
	let ctr = 0;
	const set = new Set(nums);

	for (const num of nums) {
		if (set.has(num + diff) && set.has(num + 2 * diff)) {
			ctr++;
		}
	}

	return ctr;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
