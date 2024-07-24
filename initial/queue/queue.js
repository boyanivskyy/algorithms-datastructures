class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const node = new Node(val);

		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}

		return ++this.size;
	}

	dequeue() {
		if (!this.first) return;

		const prevFirst = this.first;
		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next;
		this.size--;

		return prevFirst.val;
	}
}

const queue = new Queue();

queue.enqueue("HELLO");
queue.enqueue("WORLD");
console.log(queue.dequeue());
console.log(queue);
