function minSubArrayLen(target, nums) {
	if (!nums.length) return 0;

	let left = 0;
	let answer = nums.length + 1;
	let total = 0;

	for (let right = 0; right < nums.length; right++) {
		total += nums[right];

		while (total >= target) {
			answer = Math.min(answer, right - left + 1);
			total -= nums[left];
			left++;
		}
	}

	return answer === nums.length + 1 ? 0 : answer;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
