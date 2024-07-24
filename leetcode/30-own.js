function findWordsInStr(str, wordsMap, step) {
	for (let i = step; i <= str.length; i += step) {
		const word = str.substring(i - step, i);

		if (wordsMap[word] !== undefined) {
			wordsMap[word] -= 1;
		}
	}

	return Object.values(wordsMap).every((x) => x === 0);
}

function findSubstring(s, words) {
	if (!words.length) return [];

	let step = words[0].length;
	let left = 0;
	let right = words.length * step;

	let res = [];

	let wordsMap = words.reduce((acc, word) => {
		acc[word] = (acc?.[word] || 0) + 1;
		return acc;
	}, {});

	while (right <= s.length) {
		const wordsCopy = structuredClone(wordsMap);

		let isSubstring = findWordsInStr(
			s.substring(left, right),
			wordsCopy,
			step
		);

		if (isSubstring) {
			left += step;
			right += step;
			res.push(left);
		} else {
			left++;
			right++;
		}
	}

	return res;
}

// [6, 9, 12]
// console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
// console.log(
// 	findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
// );
console.log(
	findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", [
		"fooo",
		"barr",
		"wing",
		"ding",
		"wing",
	])
);
