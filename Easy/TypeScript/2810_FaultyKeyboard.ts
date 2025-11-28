function finalString(s: string): string {
	let str = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "i") {
			str.reverse();
		} else {
			str.push(s[i]);
		}
	}

	return str.join("");
}
