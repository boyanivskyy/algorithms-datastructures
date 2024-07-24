// for any index of an array n
// the left child is stored at 2n+1
// the right child is stored at 2n+2

// for any child of an array n
// find parent by knowing child -> Math.floor((n - 1) / 2)

class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(val) {
		this.values.push(val);

		if (this.values.length <= 2) return;

		this.bubbleUp(this.values.length - 1);
	}

	extractMax() {
		if (this.values.length === 1) {
			this.values.pop();
			return;
		}

		const n = this.values.length - 1;
		this.values[0] = this.values[n];
		this.values.pop();
		this.bubbleDown(0);
	}

	bubbleDown(n) {
		if (n > this.values.length - 1) return;
		const parent = this.values[n];
		const leftChild = this.values[2 * n + 1];
		const rightChild = this.values[2 * n + 2];

		if (leftChild > rightChild) {
			if (leftChild > parent) {
				[this.values[n], this.values[2 * n + 1]] = [
					this.values[2 * n + 1],
					this.values[n],
				];
			}
		} else {
			if (rightChild > parent) {
				[this.values[n], this.values[2 * n + 2]] = [
					this.values[2 * n + 2],
					this.values[n],
				];
			}
		}
	}

	bubbleUp(n) {
		if (n === 0) return;
		const parent = Math.floor((n - 1) / 2);

		// child node > parent node(if yes swap them)
		if (this.values[n] > this.values[parent]) {
			[this.values[n], this.values[parent]] = [
				this.values[parent],
				this.values[n],
			];
			this.bubbleUp(parent);
		}
	}
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(7);
maxBinaryHeap.insert(5);
maxBinaryHeap.insert(10);
maxBinaryHeap.insert(13);
maxBinaryHeap.insert(11);
console.log(maxBinaryHeap.values);
