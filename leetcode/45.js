const jump = (nums) => {
	let left = 0;
	let right = 0;
	let res = 0;

	while (right < nums.lengt - 1) {
		const farthest = 0;
		for (let i = left; i < right + 1; i++) {
			farthest = Math.max(farthest, i + nums[i]);
		}

		left = right + 1;
		right = farthest;
		res++;
	}

	return res;
};
