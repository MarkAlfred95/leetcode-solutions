function countPairs(nums: number[], target: number): number {
	let ctr = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j < nums.length; j++) {
			if (i < j && nums[i] + nums[j] < target) {
				ctr++;
			}
		}
	}

	return ctr;
}

// Time Complexity: O(n²)
// Space Complexity: O(1)
