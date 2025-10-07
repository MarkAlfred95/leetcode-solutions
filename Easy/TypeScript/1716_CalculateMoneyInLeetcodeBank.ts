function totalMoney(n: number): number {
	let sum = 0;
	let start = 1;

	while (n > 0) {
		for (let j = 0; j < 7 && n > 0; j++) {
			sum += start + j;
			n--;
		}
		start++;
	}

	return sum;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
