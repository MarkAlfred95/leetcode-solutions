function numberOfEmployeesWhoMetTarget(
	hours: number[],
	target: number
): number {
	let ctr = 0;

	for (let i = 0; i < hours.length; i++) {
		if (hours[i] >= target) {
			ctr++;
		}
	}

	return ctr;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
