function reverseWords(s) {
	s = s.trim();

	let length = s.length;
	let word = "";
	let res = "";

	for (let i = length - 1; i >= 0; i--) {
		if (s[i] === " ") {
			if (word) {
				res += word;
				word = "";
			}

			if (!res.endsWith(" ")) res += " ";
		} else {
			word = s[i] + word;
		}
	}

	if (word) {
		res += word;
	}

	return res;
}

function test(s) {
	let res = "";

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === " ") continue;

		let word = "";
		while (s[i] !== " " && s[i] !== undefined) {
			word = s[i--] + word;
		}
		res += word + " ";
	}

	return res;
}

console.log("|" + test("the sky is blue") + "|");
