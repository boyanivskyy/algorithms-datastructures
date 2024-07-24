function productExceptSelf(nums) {
	let answer = [1];
	for (let i = 1; i < nums.length; i++) {
		answer[i] = nums[i - 1] * answer[i - 1];
	}

	let r = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		answer[i] = nums[i] * r;
		r *= nums[i];
	}

	return answer;
}
