// O(n)
/**
 * function which returns sum of subarray of given length
 *
 * @param arr
 * @param n - sub array length
 */
function maxSubarraySum(arr, num) {
	let maxSum = 0;
	if (arr.length < num) return null;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	let tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 1, 5, 2, 1], 2)); // 7
console.log(maxSubarraySum([1, 2, 3, 1, 5, 2, 1], 3)); // 9
console.log(maxSubarraySum([1, 2, 3, 1, 5, 2, 1], 1)); // 5
