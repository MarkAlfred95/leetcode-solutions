/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
	if (n === 0) return 0;
	if (n === 1) return 1;

	let fA = 0,
		fB = 1;
	for (let i = 2; i <= n; i++) {
		let temp = fA + fB;
		fA = fB;
		fB = temp;
	}

	return fB;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
