function lengthOfLongestSubstring(s) {
	let left = 0;
	let set = new Set();
	let longest = 0;

	for (let right = 0; right < s.length; right++) {
		while (set.has(s[right])) {
			set.delete(s[left]);
			left++;
		}

		set.add(s[right]);
		longest = Math.max(longest, set.size);
	}

	return longest;
}

console.log(lengthOfLongestSubstring("001"));
