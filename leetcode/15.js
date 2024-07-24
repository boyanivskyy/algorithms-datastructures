var threeSum = function (nums) {
	nums.sort((a, b) => a - b);
	console.log(nums);
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
