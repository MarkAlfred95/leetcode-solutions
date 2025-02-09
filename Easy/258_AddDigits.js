/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	while (num > 9) {
		let ans = 0;
		let arr = String(num).split("").map(Number);

		for (let i = 0; i < arr.length; i++) {
			ans += arr[i];
		}

		num = ans;
	}

	return num;
};

// Time Complexity: O(log² n)
// Space Complexity: O(log n)
