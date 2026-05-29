function minPartitions(n: string): number {
	let nums = [];

	for (let i = 0; i < n.length; i++) {
		nums.push(Number(n[i]));
	}

	return Math.max(...nums);
}

// Time Complexity: O(n)
// Space Complexity: O(n)
