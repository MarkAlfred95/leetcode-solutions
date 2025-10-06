/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
	let count = 0;

	for (let i = low; i <= high; i++) {
		let str = String(i);
		if (str.length !== 3) {
			let sumA = 0;
			let sumB = 0;
			let toAddA = str.slice(0, str.length / 2).split("");
			let toAddB = str.slice(str.length / 2).split("");

			for (let j = 0; j < toAddA.length; j++) {
				sumA += Number(toAddA[j]);
			}

			for (let j = 0; j < toAddB.length; j++) {
				sumB += Number(toAddB[j]);
			}

			if (sumA === sumB) {
				count++;
			}
		}
	}

	return count;
};
