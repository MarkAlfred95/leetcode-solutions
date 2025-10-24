function runningSum(nums: number[]): number[] {
	let arr = [nums[0]];

	if (nums.length === 1) {
		return arr;
	}

	for (let i = 1; i < nums.length; i++) {
		arr[i] = nums[i] + arr[i - 1];
	}

	return arr;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
