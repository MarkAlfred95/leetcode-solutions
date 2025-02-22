/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
	if (n === 1) return true;
	let ans = 1;

	for (let i = 0; i < n; i++) {
		ans *= 3;
		if (ans >= n) {
			break;
		}
	}

	return ans === n;
};

// Time Complexity: O(log n)
// Space Complexity: O(1)
