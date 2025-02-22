/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
	let ans = [];

	for (let i = left; i <= right; i++) {
		let num = i,
			isValid = true;

		while (num > 0) {
			let digit = num % 10;
			if (digit === 0 || i % digit !== 0) {
				isValid = false;
				break;
			}
			num = Math.floor(num / 10);
		}

		if (isValid) ans.push(i);
	}

	return ans;
};

// Time Complexity: O(d × n) (where n is the range size and d is the number of digits in each number)
// Space Complexity: O(n)
