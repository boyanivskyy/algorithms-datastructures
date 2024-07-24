function maxArea(height) {
	let start = 0;
	let end = height.length - 1;

	let res = 0;
	while (start <= end) {
		const width = end - start;
		res = Math.max(res, Math.min(height[start], height[end]) * width);

		if (height[start] <= height[end]) {
			start++;
		} else {
			end--;
		}
	}

	return res;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
