/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
	let ans = 0;
	let nums = String(num);

	for (let i = 0; i < nums.length; i++) {
		if (num % nums[i] === 0) {
			ans++;
		}
	}

	return ans;
};

// Time Complexity: O(d) where d is the number of digits in num (≈ O(log₁₀ n)).
// Space Complexity: O(d) due to string conversion (≈ O(log₁₀ n)).
