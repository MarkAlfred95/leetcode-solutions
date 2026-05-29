function isBalanced(num: string): boolean {
	let sumA = 0;
	let sumB = 0;

	for (let i = 0; i < num.length; i++) {
		if (i % 2 === 0) {
			sumA += Number(num[i]);
		} else {
			sumB += Number(num[i]);
		}
	}
	return sumA === sumB;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
