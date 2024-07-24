var chunk = function (arr, size) {
	const chunks = [];

	for (let i = 0; i < arr.length; i++) {
		chunks.push([]);

		const end = i + size > arr.length ? arr.length : i + size;

		for (let j = i; j < end; j++) {
			chunks[chunks.length - 1].push(arr[j]);
		}
		i += size;
	}

	return chunks;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));
