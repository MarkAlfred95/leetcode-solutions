function alternatingSum(nums: number[]): number {
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		if (i % 2 === 0) {
			sum += nums[i];
		} else {
			sum -= nums[i];
		}
	}

	return sum;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
