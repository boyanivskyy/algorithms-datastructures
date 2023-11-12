/**
 * find how many matches of target in str
 *
 * @param str
 * @param target
 */
function naiveStringSearch(str, target) {
	let counter = 0;
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < target.length; j++) {
			if (str[i + j] !== target[j]) {
				break;
			}

			if (j === target.length - 1) {
				counter++;
			}
		}
	}

	return counter;
}

console.log(naiveStringSearch("qwe asdzxc qwe asd qwefds", "qwe")); // 3 matches of 'qwe'
console.log(naiveStringSearch("1122331133", "11")); // 2 matches of '11'
