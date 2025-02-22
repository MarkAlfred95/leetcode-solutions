/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
	let ctr = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 3 !== 0) {
			ctr++;
		}
	}

	return ctr;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
