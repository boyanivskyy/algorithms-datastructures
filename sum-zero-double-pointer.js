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
	let start = 0;
	let end = array.length - 1;

	while (start != end) {
		const first = array[start];
		const last = array[end];
		if (first + last === 0) {
			return true;
		}

		if (Math.abs(first) > Math.abs(last)) {
			start++;
		} else {
			end--;
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
