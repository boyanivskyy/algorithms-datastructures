/**
 * count unique values in array using double pointer(array is sorted)
 *
 * @param {number[]} arr
 */
function countUniqueArrayValues(arr) {
	if (arr?.length <= 1) {
		return arr.length;
	}

	let left = 0;
	let right = 1;

	while (right < arr.length) {
		if (arr[left] !== arr[right]) {
			left++;
			arr[left] = arr[right];
		}

		right++;
	}

	return left + 1;
}

console.log(countUniqueArrayValues([1, 1, 1, 2, 3, 3, 3, 5, 9, 9])); // 5
console.log(countUniqueArrayValues([3, 3, 6, 6, 6, 9])); // 3
console.log(countUniqueArrayValues([])); // 0
console.log(countUniqueArrayValues([222])); // 0
