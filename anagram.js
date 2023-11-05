// check if 2 strings are anagrams
// 'aazzdd' === 'zzddaa'
// 'abc' !== 'qwe'

function isValidAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	const str1Map = {};
	for (let i = 0; i < str1.length; i++) {
		str1Map[str1[i]] = (str1Map[str1[i]] || 0) + 1;
	}

	for (let i = 0; i < str2.length; i++) {
		const key = str2[i];
		if (!str1Map[key]) {
			return false;
		} else {
			str1Map[key] -= 1;
		}
	}

	return true;
}

console.log(isValidAnagram("qqwe", "ewqq")); // true
console.log(isValidAnagram("aaa", "aaa")); // true
console.log(isValidAnagram("aaa", "bbb")); // false
console.log(isValidAnagram("aaa", "aaaa")); // false
