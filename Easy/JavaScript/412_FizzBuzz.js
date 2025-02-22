/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		let print = "";
		if (i % 3 === 0) {
			print += "Fizz";
		}
		if (i % 5 === 0) {
			print += "Buzz";
		}

		arr.push(String(print || i));
	}

	return arr;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
