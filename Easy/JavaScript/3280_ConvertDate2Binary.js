/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
	let dates = date.split("-");
	return (
		Number(dates[0]).toString(2) +
		"-" +
		Number(dates[1]).toString(2) +
		"-" +
		Number(dates[2]).toString(2)
	);
};

// Time Complexity: O(1)
// Space Complexity: O(1)
