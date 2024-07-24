// pick first element of array and return it's index after reordering
function pivot(arr, start = 0, end = arr.length - 1) {
	let pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			[arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
		}
	}

	[arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

	return swapIdx;
}

// worst case O(n^2), avg case O(n log n)
// space complexity O(log n)
function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		const pivotIdx = pivot(arr, left, right);

		quickSort(arr, left, pivotIdx - 1);
		quickSort(arr, pivotIdx + 1, right);
	}

	return arr;
}

console.log("pivot", quickSort([5, 1, 2, 3, 7, 8, 9])); // 4
