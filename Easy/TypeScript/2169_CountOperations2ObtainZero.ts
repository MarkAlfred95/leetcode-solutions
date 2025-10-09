function countOperations(num1: number, num2: number): number {
	let ctr = 0;
	while (num1 !== 0 && num2 !== 0) {
		if (num1 >= num2) {
			ctr += Math.floor(num1 / num2);
			num1 %= num2;
		} else {
			ctr += Math.floor(num2 / num1);
			num2 %= num1;
		}
	}
	return ctr;
}

// Time Complexity: O(log n)
// Space Complexity: O(1)
