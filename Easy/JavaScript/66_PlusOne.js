/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	// return String(parseInt(digits.join("")) + 1).split("").map(Number);
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] < 9) {
			digits[i] += 1;
			break;
		} else {
			digits[i] = 0;
		}
	}

	if (digits[0] === 0) {
		digits.unshift(1);
	}

	return digits;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
