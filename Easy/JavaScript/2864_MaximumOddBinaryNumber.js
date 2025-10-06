/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
	let zeroes = "";
	let ones = "";
	let isFound = false;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "1" && !isFound) {
			isFound = true;
		} else if (s[i] === "1" && isFound) {
			ones += "1";
		} else {
			zeroes += "0";
		}
	}

	return ones + zeroes + "1";
};

// Time Complexity: O(n)
// Space Complexity: O(n)
