class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}
class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	add(val) {
		const node = new Node(val);

		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			node.next = this.first;
			this.first = node;
		}

		return ++this.size;
	}

	remove() {
		if (!this.first) return;
		if (this.first === this.last) {
			this.last = null;
		}

		const removed = this.first;
		this.first = this.first.next;

		return removed;
	}
}

const stack = new Stack();

stack.add("first");
stack.add("last");
stack.add("last last");

console.log("stack", stack);

console.log(stack.remove());
console.log("after remove", stack);
