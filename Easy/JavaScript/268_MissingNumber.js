/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let sumA = 0;
	let sumB = nums.length;

	for (let i = 0; i < nums.length; i++) {
		sumA += nums[i];
		sumB += i;
	}

	return sumB - sumA;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
