function bubbleSort(arr, asc) {
	let noSwaps = false;
	for (let i = 0; i < arr.length; i++) {
		noSwaps = true;
		for (let j = 1; j < arr.length - i; j++) {
			if (asc ? arr[j - 1] > arr[j] : arr[j - 1] < arr[j]) {
				[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
				noSwaps = false;
			}
		}

		if (noSwaps) {
			console.log("stopped with noSwaps condition");
			break;
		} else {
			console.log("iteration", i + 1);
		}
	}

	return arr;
}

console.log(bubbleSort([1, 54, 3, 2, 7, 9], true)); // 1 2 3 7 9 54
console.log(bubbleSort([1, 3], true)); // 1 3
console.log(bubbleSort([1, 2, 4, 3], true)); // 1 3
