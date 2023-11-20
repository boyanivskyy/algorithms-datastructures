function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
	if (num === 0) return 1;

	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(digitCount(nums[i]), maxDigits);
	}

	return maxDigits;
}

// O(n)
function radixSort(arr) {
	const maxDigitLen = mostDigits(arr);

	for (let k = 0; k < maxDigitLen; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);

		for (let i = 0; i < arr.length; i++) {
			const bucket = digitBuckets[getDigit(arr[i], k)];
			bucket.push(arr[i]);
		}

		arr = [].concat(...digitBuckets);
	}

	return arr;
}

console.log(getDigit(123, 1));
console.log(digitCount(123));
console.log(mostDigits([123, 3453, 1, 23]));

console.log("radixSort", radixSort([1234, 4, 5, 234, 987, 43123]));
