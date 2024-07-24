const rotate = (nums, k) => {
	let n = nums.length;
	k = k % nums.length;
	let count = 0;

	for (let start = 0; count < nums.length; start++) {
		let currentIdx = start;
		let prev = nums[start];

		do {
			let nextIdx = (currentIdx + k) % n;
			let temp = nums[nextIdx];
			nums[nextIdx] = prev;
			prev = temp;
			currentIdx = nextIdx;
			count++;
		} while (start !== currentIdx);
	}
};

const input = [1, 2, 3, 4, 5, 6, 7];
rotate(input, 3);
console.log("after rotation", input); // [5,6,7,1,2,3,4]
