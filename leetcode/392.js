/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	if (!s) return true;

	let sIdx = 0;
	for (let i = 0; i < t.length; i++) {
		if (t[i] === s[sIdx]) {
			if (sIdx++ === s.length - 1) return true;
		}
	}

	return false;
};

console.log(isSubsequence("acb", "ahbgdc"));
console.log(isSubsequence("abc", "akkeadbdfqwerc"));
