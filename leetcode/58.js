function lengthOfLastWord(s) {
	let n = s.length;
	let result = 0;

	while (n > 0) {
		n--;

		if (s[n] !== " ") {
			result++;
		} else if (result > 0) {
			return result;
		}
	}

	return result;
}
