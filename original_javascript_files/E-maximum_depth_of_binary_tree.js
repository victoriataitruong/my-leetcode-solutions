/*
Leetcode 104: Maximum Depth of Binary Tree

Problem Description:
Given the root of a binary tree, return its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. A leaf is a node with no children. This problem can be solved using a Depth-First Search (DFS) approach.

Approach:
1. **Depth-First Search (DFS)**: Use recursion to traverse the tree, calculating the depth at each node.
2. **Base Case**: If the current node is None, return 0 (no depth).
3. **Recursive Case**: Recursively compute the depth of both the left and right subtrees.
4. **Return the Maximum Depth**: For each node, the depth is 1 plus the maximum depth of its left and right subtrees.
*/

class Solution {
    maxDepth(root) {
        // Base case: if the node is null, return 0 (no depth)
        if (!root) {
            return 0;
        }

        // Recursively find the depth of the left subtree
        const leftDepth = this.maxDepth(root.left);

        // Recursively find the depth of the right subtree
        const rightDepth = this.maxDepth(root.right);

        // Return the maximum depth between left and right subtrees plus 1 for the current node
        return 1 + Math.max(leftDepth, rightDepth);
    }
}
