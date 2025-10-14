function numJewelsInStones(jewels: string, stones: string): number {
	let ctr = 0;

	for (let i = 0; i < stones.length; i++) {
		if (jewels.includes(stones[i])) {
			ctr++;
		}
	}

	return ctr;
}

// Time Complexity: O(n · m) where n is the length of stones and m is the length of jewels.
// Space Complexity: O(1)
