/*
Leetcode 323: Number of Connected Components in an Undirected Graph

Problem Description:
You are given an integer `n`, the number of nodes in an undirected graph, and a 2D array `edges`, where each edge `edges[i] = [u, v]` connects nodes `u` and `v`. Return the number of connected components in the graph. A connected component is a set of nodes in which any node is reachable from any other node in the set.

Approach:
1. **Union-Find (Disjoint Set Union)**: The Union-Find data structure helps track and merge connected components efficiently. Initially, each node is in its own component, and the algorithm merges them as it processes the edges.
2. **Union**: For each edge, union the two nodes (if they belong to different components).
3. **Find**: To check if two nodes are connected, we find the roots of both nodes and check if they belong to the same component.
4. **Count Components**: At the end, the number of connected components will be equal to the number of unique roots in the Union-Find structure.
*/

class Solution {
    countComponents(n, edges) {
        // Initialize the parent array where each node is its own parent initially
        const parent = Array.from({ length: n }, (_, i) => i);

        // Helper function to find the root of a node with path compression
        const find = (x) => {
            if (parent[x] !== x) {
                parent[x] = find(parent[x]); // Path compression
            }
            return parent[x];
        };

        // Helper function to union two components
        const union = (x, y) => {
            const rootX = find(x);
            const rootY = find(y);

            // If they are not already in the same component, union them
            if (rootX !== rootY) {
                parent[rootX] = rootY;
            }
        };

        // Iterate through each edge and union the connected nodes
        for (const [u, v] of edges) {
            union(u, v);
        }

        // Count the number of unique roots (connected components)
        let components = 0;
        for (let i = 0; i < n; i++) {
            if (parent[i] === i) { // A node is its own root
                components++;
            }
        }

        return components;
    }
}

