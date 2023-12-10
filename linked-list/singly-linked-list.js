class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else if (this.tail) {
			this.tail.next = node;
			this.tail = this.tail.next;
		}

		this.length++;

		return this;
	}

	pop() {
		if (!this.tail) {
			return this;
		}

		let curr = this.head;
		let newTail = curr;

		while (curr.next) {
			newTail = curr;
			curr = curr.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return curr;
	}

	unshift(val) {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			node.next = this.head;
			this.head = node;
		}

		this.length++;

		return this;
	}

	shift() {
		if (!this.head) {
			return;
		}

		const currHead = this.head;
		this.head = currHead.next;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return currHead;
	}

	get(idx) {
		if (idx < 0 || idx > this.length) {
			return;
		}

		let counter = 0;
		let curr = this.head;

		while (counter !== idx) {
			curr = curr.next;
			counter++;
		}

		return curr;
	}

	set(idx, val) {
		let foundNode = this.get(idx);

		if (foundNode) {
			foundNode.val = val;
			return true;
		}

		return false;
	}

	insert(idx, val) {
		if (idx < 0 || idx > this.length) return false;
		if (idx === this.length) return !!this.push(val);
		if (idx === 0) return !!this.unshift(val);

		let prevNode = this.get(idx - 1);
		const newNode = new Node(val);
		const prevNext = prevNode.next;

		prevNode.next = newNode;
		newNode.next = prevNext;

		this.length++;

		return true;
	}

	remove(idx) {
		if (idx < 0 || idx > this.length) return false;
		if (idx === this.length) return !!this.pop();
		if (idx === 0) return !!this.shift();

		let prevNode = this.get(idx - 1);
		prevNode.next = prevNode.next.next;
		this.length--;

		return true;
	}

	print() {
		const arr = [];
		let curr = this.head;
		while (curr) {
			arr.push(curr.val);
			curr = curr.next;
		}
		console.log(arr);
	}

	// for [1, 2, 3] list
	reverse() {
		let node = this.head; // old head
		this.head = this.tail; // head = tail
		this.tail = node; // tail = head

		let next; // null
		let prev; // null

		for (let i = 0; i < this.length; i++) {
			next = node.next; // { val: 2, next: { val: 3, next: null} }
			node.next = prev; // node.next = null
			prev = node; // prev = { val: 1, next: null }
			node = next; // node = { val: 2, next: { val: 3, next: null} }
		}

		return this;
	}
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(1);
singlyLinkedList.push(2);
singlyLinkedList.push(3);
singlyLinkedList.push(5);
singlyLinkedList.push(4);
singlyLinkedList.reverse();
singlyLinkedList.print();
