/*
Leetcode 133: Clone Graph

Problem Description:
Given a reference to a node in a **connected undirected graph**, return a **deep copy** of the graph. Each node in the graph contains a value and a list of its neighbors. The graph is represented as an adjacency list, where each node's neighbors are represented by a list of nodes. You must implement an algorithm to clone the graph using **O(n)** time complexity, where `n` is the number of nodes.

Approach:
1. **BFS or DFS Traversal**: Use either Depth-First Search (DFS) or Breadth-First Search (BFS) to traverse the graph. In this solution, we will use DFS.
2. **Hash Map for Cloning**: Maintain a hash map (`visited`) to keep track of the original nodes and their corresponding cloned nodes.
3. **Recursion**: For each node, recursively clone its neighbors and update the cloned graph.
4. **Return the Cloned Graph**: Once the entire graph is cloned, return the reference to the cloned node.
*/

// Definition for a Node.
class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

class Solution {
    /**
     * Clone the given graph using DFS approach.
     * @param {Node} node - The starting node of the graph
     * @return {Node} - A deep copy of the graph
     */
    cloneGraph(node) {
        if (!node) return null; // Edge case: If the node is null, return null

        // Dictionary to store the mapping between original nodes and their clones
        const visited = new Map();

        // DFS function to clone the graph
        const dfs = (node) => {
            if (visited.has(node)) {
                return visited.get(node); // Return the already cloned node
            }

            // Create a new clone node
            const cloneNode = new Node(node.val);

            // Store the clone in the visited map
            visited.set(node, cloneNode);

            // Recursively clone all the neighbors
            for (let neighbor of node.neighbors) {
                cloneNode.neighbors.push(dfs(neighbor));
            }

            return cloneNode;
        };

        // Start DFS from the given node and return its clone
        return dfs(node);
    }
}
