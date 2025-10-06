/**
 * @param {number} n
 * @return {boolean}
 */
const isStrictlyPalindromic = (n) => {
	for (let i = 2; i <= n - 2; i++) {
		if (!isPalindrome(n.toString(i))) {
			return false;
			break;
		}
	}
	return true;
};

const isPalindrome = (x) => {
	if (x < 0 || (x !== 0 && x % 10 === 0)) {
		return false;
	}

	let reversed = 0;
	while (x > reversed) {
		reversed = reversed * 10 + (x % 10);
		x = Math.floor(x / 10);
	}

	return x === reversed || x === Math.floor(reversed / 10);
};

// Time Complexity: O(n · log n)
// Space Complexity: O(log n)
