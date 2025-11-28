function numberGame(nums: number[]): number[] {
	let arr = [];
	let sorted = nums.sort((a, b) => a - b);

	for (let i = 1; i < sorted.length; i += 2) {
		arr.push(sorted[i], sorted[i - 1]);
	}

	return arr;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
