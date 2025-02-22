/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
	let expected = val;
	return {
		toBe: (val) => {
			if (expected === val) {
				return true;
			} else {
				throw new Error("Not Equal");
			}
		},
		notToBe: (val) => {
			if (expected !== val) {
				return true;
			} else {
				throw new Error("Equal");
			}
		},
	};
};

// Time Complexity: O(1)
// Space Complexity: O(1)
