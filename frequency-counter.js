// have 2 array, check if first array elements are equal
// to second array elements, but squared(duplicated array elements included)

function arr1SameAsArr2Squared(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	const arr2ToMap = arr2.reduce((map, el) => {
		map[el] = (map[el] || 0) + 1;
		return map;
	}, {});

	for (let i = 0; i < arr1.length; i++) {
		const match = arr1[i] ** 2;
		if (!arr2ToMap[match]) {
			return false;
		} else {
			arr2ToMap[match] -= 1;
		}
	}

	return true;
}

console.log(arr1SameAsArr2Squared([1, 15, 9], [1, 81, 225])); // true
console.log(arr1SameAsArr2Squared([1, 1, 3], [1, 9, 2])); // false
