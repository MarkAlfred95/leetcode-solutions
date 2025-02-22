/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	isNeg = false;
	if (x < 0) {
		x *= -1;
		isNeg = true;
	}
	let rev = String(x).split("").reverse().join("");

	if (isNeg) {
		rev *= -1;
	}

	return rev > 2147483647 || rev < -2147483648 ? 0 : Number(rev);
};

// Time Complexity: O(log x) (since the number has approximately log₁₀(x) digits, and string operations run in that order)
// Space Complexity: O(log x) (storing the reversed string requires space proportional to the number of digits)
