/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
	if (n === 1) return [0];

	let arr = [];

	if (n % 2 !== 0) {
		arr.push(0);
	}

	for (let i = 0; i < Math.floor(n / 2); i++) {
		arr.push(5 + i);
		arr.push(-5 - i);
	}

	return arr;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
