function squareIsWhite(coordinates: string): boolean {
	let letter = (coordinates[0].charCodeAt(0) - 96) % 2 === 0;
	let num = Number(coordinates[1]) % 2 === 0;

	if ((letter && num) || (!letter && !num)) {
		return false;
	} else {
		return true;
	}
}

// Time Complexity: O(1)
// Space Complexity: O(1)
