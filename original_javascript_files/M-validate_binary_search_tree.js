/*
Leetcode 98: Validate Binary Search Tree

Problem Description:
Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
1. The left subtree of a node contains only nodes with keys **less than** the node's key.
2. The right subtree of a node contains only nodes with keys **greater than** the node's key.
3. Both the left and right subtrees must also be binary search trees.

Approach:
1. **Recursive In-Order Traversal**: Perform an in-order traversal while keeping track of the previously visited node.
2. **Validation Check**: If the current node's value is not greater than the previous node's value, the tree is not a valid BST.
3. **Bounds-Based Recursion**: Alternatively, track valid ranges (min and max) for each node to ensure BST conditions hold.
*/

// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    isValidBST(root) {
        // Helper function to validate the BST with bounds
        const helper = (node, lower = -Infinity, upper = Infinity) => {
            // Base case: an empty node is valid
            if (!node) {
                return true;
            }

            // Check the current node's value against the allowed range
            if (node.val <= lower || node.val >= upper) {
                return false;
            }

            // Recursively check the left subtree (max value should be current node's value)
            if (!helper(node.left, lower, node.val)) {
                return false;
            }

            // Recursively check the right subtree (min value should be current node's value)
            if (!helper(node.right, node.val, upper)) {
                return false;
            }

            // If all checks pass, this subtree is valid
            return true;
        };

        // Start the recursion from the root node
        return helper(root);
    }
}
