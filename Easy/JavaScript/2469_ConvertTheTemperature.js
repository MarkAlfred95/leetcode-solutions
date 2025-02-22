/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
	return [celsius + 273.15, celsius * 1.8 + 32.0];
};

// Time Complexity: O(1)
// Space Complexity: O(1)
