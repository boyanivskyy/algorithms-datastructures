class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
		this.values.push({ val, priority });
		this.sort();
	}

	/**
	 * dequeue
	 *
	 * @returns { { val: string; priority: number } }
	 */
	dequeue() {
		return this.values.shift();
	}

	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	/**
	 * add new vertex(node)
	 *
	 * @param {string | number} vertex
	 */
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2, weight) {
		const listForVertex1 = this.adjacencyList[vertex1];
		const listForVertex2 = this.adjacencyList[vertex2];

		listForVertex1?.indexOf(vertex2) === -1 &&
			listForVertex1.push({
				vertex: vertex2,
				weight,
			});

		listForVertex2?.indexOf(vertex1) === -1 &&
			listForVertex2.push({
				vertex: vertex1,
				weight,
			});
	}

	dijkstras(start, end) {
		const nodes = new PriorityQueue();
		const previous = {};
		const distances = {};
		let smallest;
		let path = []; // to return at the end

		// build up initial state
		Object.keys(this.adjacencyList).forEach((vertex) => {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		});

		// as long as there is smth to visit
		while (nodes.values.length) {
			smallest = nodes.dequeue().val;

			if (smallest === end) {
				// we are done
				// build path to return
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}

				break;
			}

			if (smallest || distances[smallest] !== Infinity) {
				for (const neighborIdx in this.adjacencyList[smallest]) {
					// find neighboring node
					let nextNode = this.adjacencyList[smallest][neighborIdx];
					// calculate new distance to neighboring node
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.vertex;

					if (candidate < distances[nextNeighbor]) {
						// update new smallest distance to neighbor
						distances[nextNeighbor] = candidate;
						// update prev - How we got to neighbor
						previous[nextNeighbor] = smallest;
						// enqueue in priority queue with new priority
						nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		}

		return path.concat(smallest).reverse();
	}
}

const wg = new WeightedGraph();

wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);

console.log(wg.dijkstras("A", "E"));
