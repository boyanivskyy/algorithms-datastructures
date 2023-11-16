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

console.log(getDigit(123, 1));
console.log(digitCount(123));
console.log(mostDigits([123, 3453, 1, 23]));
