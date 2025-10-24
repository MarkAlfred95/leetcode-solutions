function recoverOrder(order: number[], friends: number[]): number[] {
	let arr = [];

	for (let i = 0; i < order.length; i++) {
		if (friends.includes(order[i])) {
			arr.push(order[i]);
		}
	}

	return arr;
}
