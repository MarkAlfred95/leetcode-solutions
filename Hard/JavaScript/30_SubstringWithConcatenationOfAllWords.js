/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
	if (!s || !words || words.length === 0) return [];

	const wordLen = words[0].length;
	const numWords = words.length;
	const totalLen = wordLen * numWords;
	if (s.length < totalLen) return [];

	const wordCount = {};
	for (let w of words) wordCount[w] = (wordCount[w] || 0) + 1;

	const ans = [];

	for (let offset = 0; offset < wordLen; offset++) {
		let left = offset;
		let count = 0;
		let seen = {};

		for (let j = offset; j <= s.length - wordLen; j += wordLen) {
			const word = s.substr(j, wordLen);

			if (wordCount[word] !== undefined) {
				seen[word] = (seen[word] || 0) + 1;
				count++;

				while (seen[word] > wordCount[word]) {
					const leftWord = s.substr(left, wordLen);
					seen[leftWord]--;
					left += wordLen;
					count--;
				}

				if (count === numWords) {
					ans.push(left);
					const leftWord = s.substr(left, wordLen);
					seen[leftWord]--;
					left += wordLen;
					count--;
				}
			} else {
				seen = {};
				count = 0;
				left = j + wordLen;
			}
		}
	}

	return ans;
};

// Time Complexity: O(n * L)
// Space Complexity: O(k + n)
