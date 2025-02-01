/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let ans = new Array(nums.length).fill(1);

	let left = 1,
		right = 1;

	for (let i = 0; i < nums.length; i++) {
		ans[i] = left;
		left *= nums[i];
	}

	for (let i = nums.length - 1; i >= 0; i--) {
		ans[i] *= right;
		right *= nums[i];
	}

	return ans;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
