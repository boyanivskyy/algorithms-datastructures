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

// INFO: shorter solution but less clear in terms of readability
// let a = headA, b = headB
// while (a !== b) {
//     a = !a ? headB : a.next
//     b = !b ? headA : b.next
// }
// return a

function getIntersectionNode(headA, headB) {
	if (headA === null || headB === null) {
		return null;
	}

	let currA = headA;
	let currB = headB;

	while (currA !== currB) {
		currA = currA.next;
		currB = currB.next;

		if (currA === currB) {
			return currA;
		}

		if (currA === null) {
			currA = currB;
		}

		if (currB === null) {
			currB = currA;
		}
	}

	return currA;
}

const listA = new ListNode(
	1,
	new ListNode(2, new ListNode(5, new ListNode(6)))
);
const listB = new ListNode(111, new ListNode(5));
console.log(getIntersectionNode(listA, listB));
