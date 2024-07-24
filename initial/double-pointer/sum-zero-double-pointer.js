/**
 * find 2 elements in sorted array which give us sum zero
 * using double pointer
 *
 * @param {number[]} array
 */
function sumZero(array) {
	if (!array?.length) {
		return false;
	}

	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		const sum = array[left] + array[right];

		if (sum === 0) {
			return true;
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}

	return false;
}

console.log(sumZero([-2, -1, 0, 2])); // true
console.log(sumZero([-5, -4, 0, 3, 5])); // true
console.log(sumZero([-1, 1])); // true
console.log(sumZero([-6, -4, 0, 3, 5])); // false
console.log(sumZero([-5, -4, 0, 3, 6])); // false
console.log(sumZero([])); // false
