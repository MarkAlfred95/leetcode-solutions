function interpret(command: string): string {
	let res = "";

	for (let i = 1; i < command.length + 1; i++) {
		if (command[i - 1] === "(" && command[i] === "a") {
			res += "al";
			i += 3;
		} else if (command[i - 1] === "(" && command[i] === ")") {
			res += "o";
			i++;
		} else if (command[i - 1] === "G") {
			res += "G";
		} else {
			res += "";
		}
	}

	return res;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
