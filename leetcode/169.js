/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	const counters = {};
	for (let i = 0; i < nums.length; i++) {
		counters[nums[i]] = (counters[nums[i]] || 0) + 1;
	}

	let tmp = null;

	Object.entries(counters).forEach(([key, val]) => {
		console.log(key, val);
		if (val > nums.length / 2 && val > (counters[tmp] || 0)) {
			tmp = key;
		}
	});

	return tmp;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
