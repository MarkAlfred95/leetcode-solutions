// it should be at least 4 items
// item length should be >= 1 and <= 3
// item value cannot exceed 255

// pattern generator function
// digit validity checker

function restoreIpAddresses(s: string): any {
	let str = "";
	if (s.length === 4) {
		str += s[0];
		for (let i = 1; i < 3; i++) {
			str += "." + s[i];
		}
	}

	if (s.length === 12) {
		str = s[0] + s[1] + s[2];
		for (let i = 3; i < 12; i++) {
			if (i % 3 === 0) {
				str += "." + s[i];
			} else {
				str += s[i];
			}
		}
	}

	return str;
}

console.log(restoreIpAddresses("255255111354"));
