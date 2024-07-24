/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	citations.sort((a, b) => b - a);
	let low = 0;
	let high = citations.length - 1;

	let result = 0;

	while (low <= high) {
		let mid = low + (high - low) / 2; // Avoid overflow

		if (arr[mid] > mid) {
			high = mid - 1;
		} else {
			result = mid; // Update result to mid because arr[mid] <= mid
			low = mid + 1;
		}
	}
	return result;
};
