class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	/**
	 * add new vertex(node)
	 *
	 * @param {string | number} vertex
	 */
	addVertex(vertex) {
		if (this.adjacencyList[vertex]) return;

		this.adjacencyList[vertex] = [];
	}

	/**
	 * add edge(connection between two vertexes(nodes))
	 *
	 * @param {string | number} vertex1
	 * @param {string | number} vertex2
	 */
	addEdge(vertex1, vertex2) {
		const listForVertex1 = this.adjacencyList[vertex1];
		const listForVertex2 = this.adjacencyList[vertex2];

		if (listForVertex1?.indexOf(vertex2) === -1) {
			listForVertex1.push(vertex2);
		}

		if (listForVertex2?.indexOf(vertex1) === -1) {
			listForVertex2.push(vertex1);
		}
	}

	/**
	 * remove edge
	 *
	 * @param {string | number} vertex1
	 * @param {string | number} vertex2
	 */
	removeEdge(vertex1, vertex2) {
		const listForVertex1 = this.adjacencyList[vertex1];
		const listForVertex2 = this.adjacencyList[vertex2];

		const idxOfV2InV1 = listForVertex1?.indexOf(vertex2);
		const idxOfV1InV2 = listForVertex2?.indexOf(vertex1);

		if (idxOfV2InV1 >= 0) {
			listForVertex1.splice(idxOfV2InV1, 1);
		}

		if (idxOfV1InV2 >= 0) {
			listForVertex2.splice(idxOfV1InV2, 1);
		}
	}

	/**
	 * remove vertex(node)
	 *
	 * @param {string | number} vertex
	 */
	removeVertex(vertex) {
		const vertexEdges = this.adjacencyList[vertex];

		while (vertexEdges.length) {
			this.removeEdge(vertexEdges[0], vertex);
		}

		delete this.adjacencyList[vertex];
	}

	/**
	 * depth first tree traversal recursive
	 *
	 * @param {string | number} start
	 *
	 * @returns {string[]}
	 */
	dfsTraverseRecursive(start) {
		if (!start) start = Object.keys(this.adjacencyList)[0];

		const visited = new Set();
		const resArr = [];

		const traverse = (vertex) => {
			if (!vertex) return;
			visited.add(vertex);
			resArr.push(vertex);

			const edges = this.adjacencyList[vertex];

			for (const edge of edges) {
				if (!visited.has(edge)) traverse(edge);
			}
		};

		traverse(start);

		return resArr;
	}

	/**
	 * depth first tree traversal iterative
	 *
	 * @param {string | number} start
	 *
	 * @returns {string[]}
	 */
	dfsTraverseIterative(start) {
		if (!start) start = Object.keys(this.adjacencyList)[0];

		const vertices = [];
		const visited = new Set([start]);
		let stack = [start];

		let currVertex;
		while (stack.length) {
			currVertex = stack.pop();
			vertices.push(currVertex);

			this.adjacencyList[currVertex].forEach((edge) => {
				if (!visited.has(edge)) {
					visited.add(edge);
					stack.push(edge);
				}
			});
		}

		return vertices;
	}

	/**
	 * bredth first tree traversal iterative
	 *
	 * @param {string | number} start
	 *
	 * @returns {string[]}
	 */
	bfs(start) {
		const queue = [start];
		const visited = new Set(start);
		const result = [];

		let currVertex;
		while (queue.length) {
			currVertex = queue.pop();
			result.push(currVertex);

			this.adjacencyList[currVertex]?.forEach((edge) => {
				if (!visited.has(edge)) {
					visited.add(edge);
					queue.push(edge);
				}
			});
		}

		return result;
	}
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// console.log(graph.dfsTraverseRecursive());
// console.log(graph.dfsTraverseIterative());
console.log(graph.bfs("A"));
