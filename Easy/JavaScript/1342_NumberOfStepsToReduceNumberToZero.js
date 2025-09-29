/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
	let n = num;
	let steps = 0;
	while (n > 0) {
		if (n % 2 === 0) {
			n /= 2;
		} else {
			n -= 1;
		}
		steps++;
	}

	return steps;
};

// Time Complexity: O(log n)
// Space Complexity: O(1)
