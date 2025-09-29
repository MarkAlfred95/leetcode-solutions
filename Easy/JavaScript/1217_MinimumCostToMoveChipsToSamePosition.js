/**
 * @param {number[]} position
 * @return {number}
 */

var minCostToMoveChips = function (position) {
	let even = 0;
	let odd = 0;
	for (let pos of position) {
		if ((pos & 1) === 0) even++;
		else odd++;
	}
	return Math.min(even, odd);
};

// Time Complexity: O(n)
// Space Complexity: O(1)
