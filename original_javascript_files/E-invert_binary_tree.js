/*
Leetcode 226: Invert Binary Tree

Problem Description:
Given the root of a binary tree, invert the tree and return its root. In other words, for each node in the tree, swap its left and right children. The inversion should happen recursively for all nodes in the tree. The time complexity of the solution is **O(n)**, where `n` is the number of nodes in the tree, as every node is visited once.

Approach:
1. **Recursive DFS**: Use a recursive depth-first search (DFS) approach to invert the tree. For each node, swap its left and right children.
2. **Base Case**: If the current node is `None`, return immediately, as there's nothing to invert.
3. **Swap**: For the current node, swap its left and right children.
4. **Recursive Call**: Continue the inversion recursively for the left and right subtrees.
5. **Return**: Return the root of the tree after it has been fully inverted.
*/

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    invertTree(root) {
        // Base case: If the current node is null, return null
        if (root === null) {
            return null;
        }

        // Swap the left and right children of the current node
        [root.left, root.right] = [root.right, root.left];

        // Recursively invert the left subtree
        this.invertTree(root.left);

        // Recursively invert the right subtree
        this.invertTree(root.right);

        // Return the root of the inverted tree
        return root;
    }
}
