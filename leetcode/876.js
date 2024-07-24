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

function middleNode(head) {
	let slow = head;
	let fast = head.next;

	while (fast) {
		slow = slow.next;

		if (!fast.next) break;
		fast = fast.next.next;
	}

	return slow;
}
