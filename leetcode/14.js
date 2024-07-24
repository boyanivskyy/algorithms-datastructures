function longestCommonPrefix(strs) {
	if (!strs.length) return "";
	if (strs.length === 1) return strs[0];

	let prefix = 0;
	let i = 0;

	while (true) {
		let tmpPrefix = prefix + strs[0][i];

		let stop;
		for (let i = 1; i < strs.length; i++) {
			if (!strs[i].startsWith(tmpPrefix)) stop = true;
		}

		if (stop) break;

		i++;
		prefix += strs[0][i];
	}

	return prefix;
}
