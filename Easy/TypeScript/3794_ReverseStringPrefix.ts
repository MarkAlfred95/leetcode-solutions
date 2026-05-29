function reversePrefix(s: string, k: number): string {
	let rev = "";
	let start = s.slice(0, k);
	let end = s.slice(k);

	for (let i = k - 1; i >= 0; i--) {
		rev += start[i];
	}

	return rev + end;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
