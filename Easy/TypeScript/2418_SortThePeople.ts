function sortPeople(names: string[], heights: number[]): string[] {
	let arr: any[] = [];
	let ans = [];

	for (let i = 0; i < names.length; i++) {
		arr.push([heights[i], names[i]]);
	}

	arr.sort((a, b) => b[0] - a[0]);

	for (let i = 0; i < names.length; i++) {
		ans.push(arr[i][1]);
	}

	return ans;
}

// Time Complexity: O(n log n)
// Space Complexity: O(n)
