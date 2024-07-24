/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function (s, numRows) {
	if (numRows == 1) {
		return s;
	}

	let n = s.length;
	let sections = Math.ceil(n / (2 * numRows - 2.0));
	let numCols = sections * (numRows - 1);

	let matrix = new Array(numRows)
		.fill(0)
		.map(() => new Array(numCols).fill(""));

	let currRow = 0,
		currCol = 0;
	let currStringIndex = 0;

	// Iterate in zig-zag pattern on matrix and fill it with string characters.
	while (currStringIndex < n) {
		// Move down.
		while (currRow < numRows && currStringIndex < n) {
			matrix[currRow][currCol] = s[currStringIndex];
			currRow++;
			currStringIndex++;
		}

		currRow -= 2;
		currCol++;

		// Move up (with moving right also).
		while (currRow > 0 && currCol < numCols && currStringIndex < n) {
			matrix[currRow][currCol] = s[currStringIndex];
			currRow--;
			currCol++;
			currStringIndex++;
		}
	}

	let answer = "";
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j]) {
				answer += matrix[i][j];
			}
		}
	}

	return answer;
};
