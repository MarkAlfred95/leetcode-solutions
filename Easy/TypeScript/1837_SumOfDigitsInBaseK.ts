function sumBase(n: number, k: number): number {
	let digitSum = 0;
	let num = n;

	if (k !== 10) {
		num = Number(n.toString(k));
	}

	while (num > 0) {
		digitSum += num % 10;
		num = Math.floor(num / 10);
	}

	return digitSum;
}

// Time Complexity: O(log n)
// Space Complexity: O(log n)
