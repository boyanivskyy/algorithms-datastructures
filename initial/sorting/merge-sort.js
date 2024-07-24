function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	const middle = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, middle));
	const right = mergeSort(arr.slice(middle, arr.length));

	return merge(left, right);
}

console.log("mergeSort", mergeSort([3, 5, 7, 1, 9, 2, 100, 99, 77, 88]));

// O(n + m) time complexity and O(n + m) time complexity
function merge(arr1, arr2) {
	let i = 0;
	let j = 0;
	let res = [];

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] > arr2[j]) {
			res.push(arr2[j]);
			j++;
		} else {
			res.push(arr1[i]);
			i++;
		}
	}

	if (i < arr1.length) {
		res = res.concat(arr1.slice(i, arr1.length));
	}

	if (j < arr2.length) {
		res = res.concat(arr2.slice(j, arr2.length));
	}

	return res;
}

// console.log(merge([1, 3, 5, 6, 7, 11], [1, 2, 4, 8, 10]));
