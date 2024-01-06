var minOperations = function (nums) {
	let operations = 0;

	const map = {};

	for (let i = 0; i < nums.length; i++) {
		map[nums[i]] = (map[nums[i]] || 0) + 1;
	}

	const values = Object.values(map);

	for (let i = 0; i < values.length; i++) {
		let val = values[i];

		while (val !== 0) {
			if (val % 3 === 0) {
				val -= 3;
				operations++;
			} else if (val % 2 === 0) {
				val -= 2;
				operations++;
			} else if (val - 3 >= 0) {
				val -= 3;
				operations++;
			} else if (val - 2 >= 0) {
				val -= 2;
				operations++;
			} else {
				return -1;
			}
		}
	}

	return operations;
};

console.log(
	minOperations([19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19])
);
// { '12': 9, '14': 10 }
