/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	let result = -1;
	if (!needle || needle.length > haystack.length) return result;

	let needleIdx = 0;
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === needle[needleIdx]) {
			if (needleIdx === 0) result = i;
			needleIdx++;

			if (needleIdx === needle.length - 1) return result;
		}
	}

	return result;
};

console.log(strStr("mississippi", "issip")); // 4
