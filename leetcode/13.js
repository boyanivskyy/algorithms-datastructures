const map = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

function romanToInt(s) {
	let answer = 0;

	for (let i = 0; i < s.length; i++) {
		if (i + 1 < s.length && map[s[i]] < map[s[i + 1]]) {
			answer += map[s[i + 1]] - map[s[i]];
			i++;
		} else {
			answer += map[s[i]];
		}
	}

	return answer;
}

console.log(romanToInt("MCMXCIV")); // 1994
