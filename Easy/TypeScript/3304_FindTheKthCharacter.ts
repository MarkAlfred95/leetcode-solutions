function kthCharacter(k: number): string {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let word = "a";

	while (word.length < k) {
		let shifted = "";
		for (let i = 0; i < word.length; i++) {
			let idx = alphabet.indexOf(word[i]) + 1;
			if (idx === 26) idx = 0;
			shifted += alphabet[idx];
		}
		word += shifted;
	}

	return word[k - 1];
}
