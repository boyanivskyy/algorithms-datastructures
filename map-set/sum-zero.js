/**
 * find 2 elements in sorted array which give us sum zero
 *
 * @param {number[]} array
 */
function sumZero(array) {
	const set = new Set();
	for (let i = 0; i < array.length; i++) {
		const val = array[i];
		if (val >= 0) {
			break;
		}
		set.add(val);
	}

	console.log(set);
	for (let i = 0; i < array.length; i++) {
		const val = array[i];
		if (set.has(val * -1)) {
			return [val, val * -1];
		}
	}

	return [];
}

console.log(sumZero([-2, -1, 0, 2])); // [-2, 2]
console.log(sumZero([-5, -4, 0, 3, 5])); // [-5, 5]
console.log(sumZero([-6, -4, 0, 3, 5])); // []
