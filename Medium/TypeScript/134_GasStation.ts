function canCompleteCircuit(gas: number[], cost: number[]): number {
	let totalTank = 0;
	let currentTank = 0;
	let start = 0;

	for (let i = 0; i < gas.length; i++) {
		const diff = gas[i] - cost[i];
		totalTank += diff;
		currentTank += diff;

		if (currentTank < 0) {
			start = i + 1;
			currentTank = 0;
		}
	}

	return totalTank >= 0 ? start : -1;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
