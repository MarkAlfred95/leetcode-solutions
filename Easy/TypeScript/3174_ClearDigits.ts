function clearDigits(s: string): string {
	const stack: string[] = [];

	for (const char of s) {
		if (isDigit(char)) {
			if (stack.length > 0) {
				stack.pop();
			}
		} else {
			stack.push(char);
		}
	}

	return stack.join("");
}

function isDigit(char: string): boolean {
	return char >= "0" && char <= "9";
}

// Time Complexity: O(n)
// Space Complexity: O(n)
