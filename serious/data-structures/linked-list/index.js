class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class LinkedList {
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

			if (counter === idx) {
				return curr;
			}
		}

		return;
	}

	set(idx, val) {
		const node = this.get(idx);

		if (node) {
			node.val = val;
			return true;
		}

		return false;
	}

	insert(idx, val) {
		if (idx < 0 || idx > this.length) return false;
		if (idx === this.length) return !!this.push(val);
		if (idx === 0) return !!this.unshift(val);

		const found = this.get(idx);

		if (found) {
			const newNode = new Node(val);
			const prevNext = prevNode.next;

			prevNode.next = newNode;
			newNode.next = prevNext;

			this.length++;

			return true;
		}

		return false;
	}

	reverse() {
		let prev = null;
		let curr = this.head;

		while (curr) {
			const next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}

		this.head = prev;

		return this;
	}

	print() {
		let curr = this.head;
		const res = [];
		while (curr) {
			res.push(curr.val);
			curr = curr.next;
		}

		console.log(res);
	}
}

const ll = new LinkedList();

ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
console.log(ll.print());
console.log(ll.reverse().print());
