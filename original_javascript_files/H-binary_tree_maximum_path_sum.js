/*
Problem Description:
Leetcode 124 - Binary Tree Maximum Path Sum

Given a non-empty binary tree, find the maximum path sum.
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.
A node can only appear in the path at most once. The path does not necessarily need to pass through the root.

The goal is to return the maximum sum possible for any path in the tree.

Constraints:
- The number of nodes in the tree is in the range [1, 3 * 10^4].
- -1000 <= Node.val <= 1000.

Example:
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The maximum path sum is obtained from the path 15 -> 20 -> 7.
*/

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    constructor() {
        this.maxSum = -Infinity; // Stores the global maximum path sum
    }

    maxPathSum(root) {
        /**
         * Helper function for DFS traversal to compute max gain from each node.
         * @param {TreeNode} node - Current node in the traversal.
         * @returns {number} Maximum path sum starting from the given node.
         */
        const dfs = (node) => {
            if (!node) return 0; // Base case: null node contributes zero to the path

            // Recursively compute max gains from left and right subtrees
            const leftGain = Math.max(dfs(node.left), 0);
            const rightGain = Math.max(dfs(node.right), 0);

            // Compute the max path sum that includes the current node
            const currentSum = node.val + leftGain + rightGain;

            // Update the global maximum if this path is the new highest
            this.maxSum = Math.max(this.maxSum, currentSum);

            // Return the maximum path sum extending from this node to one of its children
            return node.val + Math.max(leftGain, rightGain);
        };

        dfs(root); // Start DFS traversal from the root
        return this.maxSum; // Return the final maximum path sum
    }
}

// Example usage
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const solution = new Solution();
console.log(solution.maxPathSum(root)); // Output: 6

