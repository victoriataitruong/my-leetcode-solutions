/*
Leetcode 261: Graph Valid Tree

Problem Description:
Given an undirected graph with `n` nodes labeled from `0` to `n-1` and a list of edges, determine if the graph is a valid tree. A valid tree is a connected acyclic graph. Specifically:
- The graph must have exactly `n-1` edges (because a tree with `n` nodes always has `n-1` edges).
- The graph must be connected (there must be a path between every pair of nodes).

Approach:
1. **Edge Count Check**: A tree with `n` nodes must have exactly `n-1` edges.
2. **Depth-First Search (DFS)**: Use DFS to traverse the graph and check if it is connected (every node is visited) and does not contain any cycles.
3. **Cycle Detection**: If during the DFS traversal, we encounter a previously visited node (that’s not the immediate parent), we have detected a cycle.

*/
class Solution {
    validTree(n, edges) {
        // If the number of edges is not exactly n-1, it's not a valid tree
        if (edges.length !== n - 1) {
            return false;
        }

        // Create an adjacency list for the graph
        const graph = Array.from({ length: n }, () => []);

        // Build the graph by adding each edge to the adjacency list
        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        // Set to keep track of visited nodes
        const visited = new Set();

        // A helper function for DFS traversal
        const dfs = (node, parent) => {
            visited.add(node);

            for (const neighbor of graph[node]) {
                if (neighbor === parent) continue; // Skip the parent node
                if (visited.has(neighbor)) return false; // Cycle detected
                if (!dfs(neighbor, node)) return false; // Recursive DFS call
            }

            return true;
        };

        // Start DFS from node 0 (arbitrary starting point)
        if (!dfs(0, -1)) {
            return false;
        }

        // If all nodes are visited, the graph is connected
        return visited.size === n;
    }
}

