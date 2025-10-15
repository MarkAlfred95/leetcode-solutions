function truncateSentence(s: string, k: number): string {
	let arr = s.split(" ");
	let str = "";

	for (let i = 0; i <= k - 1; i++) {
		if (i < k - 1) {
			str += arr[i] + " ";
		} else {
			str += arr[i];
		}
	}

	return str;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
