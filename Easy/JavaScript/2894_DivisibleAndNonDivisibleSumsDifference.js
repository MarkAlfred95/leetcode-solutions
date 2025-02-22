/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
	let sumA = 0;
	let sumB = 0;

	for (let i = 1; i <= n; i++) {
		if (i % m !== 0) {
			sumA += i;
		} else {
			sumB += i;
		}
	}

	return sumA - sumB;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
