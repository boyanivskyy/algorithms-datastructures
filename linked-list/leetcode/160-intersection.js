/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function getIntersectionNode(headA, headB) {
	const set = new Set();
	let curr = headA;
	while (curr !== null) {
		set.add(curr.val);
		curr = curr.next;
	}

	curr = headB;
	while (curr !== null) {
		if (set.has(curr.val)) {
			return curr;
		}

		set.add(curr.val);

		curr = curr.next;
	}

	return null;
}

const listA = new ListNode(
	1,
	new ListNode(2, new ListNode(5, new ListNode(6)))
);
const listB = new ListNode(111, new ListNode(5));
console.log(getIntersectionNode(listA, listB));
