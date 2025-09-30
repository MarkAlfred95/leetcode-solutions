/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
	let numsStr = nums.join("");
	let sumA = 0;
	let sumB = 0;

	for (let i = 0; i < nums.length; i++) {
		sumA += nums[i];
	}

	for (let i = 0; i < numsStr.length; i++) {
		sumB += Number(numsStr[i]);
	}

	return Math.abs(sumA - sumB);
};

// Time Complexity: O(n + m) where n = nums.length and m = total number of digits in nums.
// Space Complexity: O(m).
