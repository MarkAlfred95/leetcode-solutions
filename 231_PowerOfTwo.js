/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	if (n === 1) return true;
	let ans = 1;

	for (let i = 0; i < n; i++) {
		ans *= 2;
		if (ans >= n) {
			break;
		}
	}

	return ans === n;
};
