class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoubleLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const nodeToPush = new Node(val);

		if (!this.head) {
			this.head = nodeToPush;
			this.tail = nodeToPush;
		} else {
			this.tail.next = nodeToPush;
			nodeToPush.prev = this.tail;
			this.tail = nodeToPush;
		}

		this.length++;

		return this;
	}

	pop() {
		if (!this.head) return;

		this.length--;

		if (this.length === 1) {
			this.tail = null;
			this.head = null;
			return this;
		}

		const prevTail = this.tail;
		this.tail = prevTail.prev;
		this.tail.next = null;
		prevTail.prev = null;

		return prevTail;
	}

	shift() {
		if (!this.head) return;

		const oldHead = this.head;

		if (this.length === 1) {
			this.tail = null;
			this.head = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		this.length--;
		return oldHead;
	}

	unshift(val) {
		const node = new Node(val);

		this.length++;
		if (!this.head) {
			this.head = node;
			this.tail = this.head;
			return this;
		}

		const prevHead = this.head;
		node.next = prevHead;
		prevHead.prev = node;
		this.head = node;

		return this;
	}

	get(idx) {
		if (idx < 0 || idx >= this.length) return;
		if (idx === 0) return this.head;
		if (idx === this.length - 1) return this.tail;

		let tmp = this.head;
		for (let i = 0; i < idx; i++) {
			if (idx === i) {
				break;
			} else {
				tmp = tmp.next;
			}
		}

		return tmp;
	}

	set(val, idx) {
		if (idx === this.length) return !!this.push(val);

		const foundedNode = this.get(idx);
		if (!foundedNode) {
			return false;
		}

		foundedNode.val = val;
		return true;
	}

	insert(val, idx) {
		if (idx < 0 || idx > this.length) return false;
		if (idx === 0) return !!this.unshift(val);
		if (idx === this.length) return !!this.push(val);

		const prevNode = this.get(idx - 1);
		const nodeToInsert = new Node(val);
		const prevNodeNext = prevNode.next;
		const prevNodePrev = prevNode.prev;

		prevNode.next = nodeToInsert;
		nodeToInsert.next = prevNodeNext;
		nodeToInsert.prev = prevNodePrev;

		this.length++;

		return true;
	}

	reverse() {
		let current = this.head;
		let prev = null;
		let next = null;

		while (current) {
			next = current.next;
			current.next = prev;
			current.prev = next;

			prev = current;
			current = next;
		}

		this.head = prev;

		return this;
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
}

const list = new DoubleLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.insert(111, 1);
list.reverse();
list.print();
