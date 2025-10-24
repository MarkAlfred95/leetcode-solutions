function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
	let max = Math.max(...candies);
	let arr = [];

	for (let i = 0; i < candies.length; i++) {
		if (candies[i] + extraCandies >= max) {
			arr.push(true);
		} else {
			arr.push(false);
		}
	}

	return arr;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
