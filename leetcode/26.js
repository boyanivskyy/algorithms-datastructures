/**
 * @param {number[]} nums
 * @return {number}
 */

// Most dummy way of doing it
// var removeDuplicates = function (nums) {
//     let i = 0;
//     let n = nums.length;

//     while (i < n) {
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i, 1);
//             n--;
//         } else {
//             i++;
//         }
//     }

//     return n;
// };

var removeDuplicates = function (nums) {
	let insertIdx = 1;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== nums[i - 1]) {
			nums[insertIdx++] = nums[i];
		}
	}

	return insertIdx;
};
