function sortSentence(s: string): string {
	let arr: any[] = s.split(" ");
	let newArr = Array(arr.length).fill("");

	for (let i = 0; i < arr.length; i++) {
		newArr[arr[i][arr[i].length - 1]] = arr[i].slice(0, -1);
	}

	return newArr.join(" ").slice(1);
}

// Time Complexity: O(n · m) where n is the number of words and m is the average word length.
// Space Complexity: O(n · m)
