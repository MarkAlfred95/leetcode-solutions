/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
	let arr = [...nums];
	for (let i = 0; i < k; i++) {
		let minIndex = 0;
		for (let j = 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		arr[minIndex] *= multiplier;
	}
	return arr;
};

// Time Complexity: O(k * n)
// Space Complexity: O(n)
