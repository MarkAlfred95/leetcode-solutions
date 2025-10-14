function reverseDegree(s: string): number {
	let ans = 0;

	for (let i = 0; i < s.length; i++) {
		let char = s.toLowerCase().charAt(i);
		let charCode = 27 - (char.charCodeAt(0) - 96);
		let product = charCode * (i + 1);
		ans += product;
	}

	return ans;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
