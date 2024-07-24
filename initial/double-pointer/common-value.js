/*
Given two integer arrays nums1 and nums2,
sorted in non-decreasing order,
return the minimum integer common to both arrays.

If there is no common integer amongst nums1 and nums2, return -1.
Note that an integer is said to be common to nums1 and nums2
if both arrays have at least one occurrence of that integer.
*/

function getCommon(nums1, nums2) {
	let right1 = 0;
	let right2 = 0;
	let min = -Infinity;

	while (right1 < nums1.length && right2 < nums2.length) {
		if (nums1[right1] === nums2[right2]) {
			min = nums1[right1];
		}

		if (nums1[right1] > nums2[right2]) {
			right2++;
		} else {
			right1++;
		}
	}

	return min;
}

console.log(getCommon([1, 2, 3], [3, 4, 5])); // 3
console.log(getCommon([7, 8, 9], [3, 4, 7])); // 7
console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5])); // 2
