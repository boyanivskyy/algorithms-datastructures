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
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push("1");
console.log(singlyLinkedList.shift());
singlyLinkedList.push("222");
singlyLinkedList.unshift("111");
console.log(singlyLinkedList);
