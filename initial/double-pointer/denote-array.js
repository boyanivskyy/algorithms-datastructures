// You are given a 0-indexed sorted array of integers nums.

// You can perform the following operation any number of times:

// Choose two indices, i and j, where i < j, such that nums[i] < nums[j].
// Then, remove the elements at indices i and j from nums.
// The remaining elements retain their original order, and the array is re-indexed.

// Return an integer that denotes the minimum length of nums after performing the operation any number of times (including zero).

// Note that nums is sorted in non-decreasing order.

function minLengthAfterRemovals(nums) {
	let stop = false;
	let left = 0;
	let right = 1;

	while (!stop) {
		if (nums[left] === nums[right]) {
			right++;

			if (nums.length === 2) {
				return 2;
			}
		}

		if (nums[right] > nums[left]) {
			nums.splice();
		}
	}
}

console.log(minLengthAfterRemovals([1, 2, 3, 4])); // 0
console.log(minLengthAfterRemovals([1, 1, 2])); // 1
