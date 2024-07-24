function canCompleteCirtuit(gas, cost) {
	let total = 0;
	let curr = 0;
	let answer = 0;

	for (let i = 0; i < gas.length; i++) {
		total += gas[i] - cost[i];
		curr += gas[i] - cost[i];

		if (curr < 0) {
			answer = i + 1;
			curr = 0;
		}
	}

	return total >= 0 ? answer : -1;
}

console.log(canCompleteCirtuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // 3
