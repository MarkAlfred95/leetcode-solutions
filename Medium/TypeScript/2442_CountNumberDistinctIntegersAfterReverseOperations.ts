function countDistinctIntegers(nums: number[]): number {
	const numSet = new Set<number>();

	for (const num of nums) {
		numSet.add(num);
		numSet.add(reverseNum(num));
	}

	return numSet.size;
}

function reverseNum(x: number): number {
	let rev = 0;
	let n = Math.abs(x);

	while (n > 0) {
		rev = rev * 10 + (n % 10);
		n = Math.floor(n / 10);
	}

	return x < 0 ? -rev : rev;
}

// Time Complexity: O(n · d) where d is the number of digits in each number (≈ O(n · log₁₀ m) for max element m).
// Space Complexity: O(n)
