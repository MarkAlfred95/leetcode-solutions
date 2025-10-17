function restoreString(s: string, indices: number[]): string {
	let arr = [];

	for (let i = 0; i < s.length; i++) {
		arr[indices[i]] = s[i];
	}

	return arr.join("");
}

// Time Complexity: O(n)
// Space Complexity: O(n)
