function insertionSort(arr) {
	let currVal;
	for (let i = 1; i < arr.length; i++) {
		currVal = arr[i];

		let j = 0;
		for (j = i - 1; j >= 0 && arr[j] > currVal; j--) {
			arr[j + 1] = arr[j];
		}

		arr[j + 1] = currVal;
	}

	return arr;
}

console.log(insertionSort([2, 6, 3, 1, 11, 15, 13]));
console.log(insertionSort([3, 2, 1, 4, 7, 5]));
console.log(insertionSort([777, 7, 77]));
