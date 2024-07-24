package main

import (
	"fmt"
	"slices"
)

type Graph struct {
	adjacencyList map[string][]string
}

func (g *Graph) addVertex(vertex string) bool {
	if _, ok := g.adjacencyList[vertex]; !ok {
		g.adjacencyList[vertex] = []string{}
		return true
	}

	return false
}

func (g *Graph) addEdge(vertex1 string, vertex2 string) {
	if _, ok := g.adjacencyList[vertex1]; ok {
		if idx := slices.Index(g.adjacencyList[vertex1], vertex2); idx == -1 {
			g.adjacencyList[vertex1] = append(g.adjacencyList[vertex1], vertex2)
		}
	}

	if _, ok := g.adjacencyList[vertex2]; ok {
		if idx := slices.Index(g.adjacencyList[vertex2], vertex1); idx == -1 {
			g.adjacencyList[vertex2] = append(g.adjacencyList[vertex2], vertex1)
		}
	}
}

func (g *Graph) removeEdge(vertex1 string, vertex2 string) {
    if edges, ok := g.adjacencyList[vertex1]; ok {
        if idx := slices.Index(edges, vertex2); idx != -1 {
            g.adjacencyList[vertex1] = append(edges[:idx], edges[idx+1:]...)
        }
    }

    if edges, ok := g.adjacencyList[vertex2]; ok {
        if idx := slices.Index(edges, vertex1); idx != -1 {
            g.adjacencyList[vertex2] = append(edges[:idx], edges[idx+1:]...)
        }
    }
}

func (g *Graph) removeVertex(vertex string) {
	defer delete(g.adjacencyList, vertex)
	if edges, ok := g.adjacencyList[vertex]; ok {
		for _, edge := range edges {
			g.removeEdge(vertex, edge)
		}
	}
}

func (g *Graph) dfsTraverseRecursive() []string {
	var start string
	traversedSlice := []string{}
	visitedVertexes := map[string]interface{}{}
	for key := range g.adjacencyList {
		start = key
		break;
	}

	g.dfsTraverseHelper(start, &traversedSlice, &visitedVertexes)

	return  traversedSlice
}

func (g *Graph) dfsTraverseHelper(vertex string, traversedSlice *[]string, visitedVertexes *map[string]interface{}) {
	edges, ok := g.adjacencyList[vertex]
	if !ok {
		return
	}

	*traversedSlice = append(*traversedSlice, vertex)
	(*visitedVertexes)[vertex] = true;

	for _, val := range edges {
		if _, ok := (*visitedVertexes)[val]; !ok {
			g.dfsTraverseHelper(val, traversedSlice, visitedVertexes)
		}
	}
}

func (g *Graph) dfsIterative() []string {
	var start string
		for key := range g.adjacencyList {
			start = key
			break;
		}

	stack := []string{start}	
	vertices := []string{}
	visited := map[string]bool{}
	visited[start] = true

	var currVertex string
	for (len(stack) != 0) {
		currVertex = stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		vertices = append(vertices, currVertex)

		for _, edge := range g.adjacencyList[currVertex] {
			if _, ok := visited[edge]; !ok {
				stack = append(stack, edge)
				visited[edge] = true
			}
		}
	}
	
	return vertices
}

func (g *Graph) bfs(start string) []string {
	queue := []string{start}
	result := []string{}
	visited := map[string]bool{}
	visited[start] = true
	var currVertex string

	for (len(queue) != 0) {
		currVertex = queue[len(queue)-1]
		queue = queue[:len(queue)-1]
		result = append(result, currVertex)

		if edges, ok := g.adjacencyList[currVertex]; ok {
			for _, edge := range edges {
				if _, ok := visited[edge]; !ok {
					visited[edge] = true;
					queue = append(queue, edge)
				}
			}
		}
	}

	return result;
}


func main() {
	graph := Graph{
		adjacencyList: map[string][]string{},
	}

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
	fmt.Println(graph.dfsTraverseRecursive())
	fmt.Println(graph.dfsIterative())
	fmt.Println(graph.bfs("A"))
}