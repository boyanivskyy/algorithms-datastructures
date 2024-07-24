/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	if (s.length === 1) return true;

	const valid = /^[a-zA-Z0-9]+$/;
	let start = 0;
	let end = s.length - 1;

	while (start <= end) {
		const leftChar = s[start];
		const leftValid = leftChar.match(valid);
		const rightChar = s[end];
		const rightValid = rightChar.match(valid);

		if (leftValid && rightValid) {
			if (leftChar.toLowerCase() === rightChar.toLowerCase()) {
				start++;
				end--;
			} else {
				return false;
			}
		}

		if (!leftValid) start++;
		if (!rightValid) end--;
	}

	return true;
};
