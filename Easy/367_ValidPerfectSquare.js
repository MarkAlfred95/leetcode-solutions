/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
	if (num < 0) return false;
	let i = 0;
	while (i * i <= num) {
		if (i * i === num) return true;
		i++;
	}
	return false;
};

// Time Complexity: O(square root of n)
// Space Complexity: O(1)
