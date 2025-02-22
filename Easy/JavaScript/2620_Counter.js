/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function (n) {
	return function () {
		return n++;
	};
};

// Time Complexity: O(1)
// Space Complexity: O(1)
