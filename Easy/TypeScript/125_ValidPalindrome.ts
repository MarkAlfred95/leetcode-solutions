function isPalindrome(s: string): boolean {
	let cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

	for (let i = 0; i < cleanStr.length / 2; i++) {
		if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
			return false;
		}
	}

	return true;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
