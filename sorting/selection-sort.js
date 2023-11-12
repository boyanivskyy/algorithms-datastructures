function selectionSort(arr) {
	let minIdx = 0;

	for (let i = 0; i < arr.length; i++) {
		minIdx = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[minIdx] > arr[j]) {
				minIdx = j;
			}
		}

		if (i !== minIdx) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
	}

	return arr;
}

console.log(selectionSort([1, 54, 3, 2, 7, 9])); // 1 2 3 7 9 54
console.log(selectionSort([1, 3])); // 1 3
console.log(selectionSort([1, 2, 4, 3])); // 1 3
