class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const node = new Node(val);
		if (!this.root) {
			this.root = node;
			return this;
		}

		let curr = this.root;
		while (true) {
			if (val < curr.val) {
				if (curr.left === null) {
					curr.left = node;
					return this;
				} else {
					curr = curr.left;
				}
			} else if (val > curr.val) {
				if (curr.right === null) {
					curr.right = node;
					return this;
				} else {
					curr = curr.right;
				}
			} else {
				return undefined;
			}
		}
	}

	find(val) {
		let curr = this.root;

		while (curr) {
			if (val === curr.val) {
				break;
			} else if (val > curr.val) {
				curr = curr.right;
			} else {
				curr = curr.left;
			}
		}

		return curr;
	}

	findRecursion(val) {
		const recFn = (node) => {
			if (!node) return undefined;
			if (val === node.val) return node;
			return val > node.val ? recFn(node.right) : recFn(node.left);
		};

		return recFn(this.root);
	}

	// breadth
	// is used mostly if tree is more like list(thin)
	bfs() {
		const values = [];
		const queue = [];

		if (this.root) {
			queue.push(this.root);
		}

		while (queue.length > 0) {
			const node = queue.shift();
			values.push(node.val);

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		return values;
	}

	// can be used to export tree, clone it, store in DB
	dfsPreOrder() {
		const values = [];
		const traverse = (node) => {
			values.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};

		traverse(this.root);

		return values;
	}

	dfsPostOrder() {
		const values = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			values.push(node.val);
		};

		traverse(this.root);

		return values;
	}

	// is used to get sorted array our of binary tree
	dfsInOrder() {
		const values = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			values.push(node.val);
			if (node.right) traverse(node.right);
		};

		traverse(this.root);

		return values;
	}
}

const tree = new BinarySearchTree();

//      5
//  4      10
//   3    8

tree.insert(5);
tree.insert(10);
tree.insert(4);
tree.insert(8);
tree.insert(3);
console.log("BFS", tree.bfs());
console.log("DFS pre order", tree.dfsPreOrder());
console.log("DFS post order", tree.dfsPostOrder());
console.log("DFS in order", tree.dfsInOrder());
