/*
Leetcode 1123: Lowest Common Ancestor of Deepest Leaves

Problem Description:
Given a binary tree, find the lowest common ancestor (LCA) of the deepest leaves. The deepest leaves are those at the greatest depth in the tree, and the LCA is the lowest node that is a common ancestor to all of the deepest leaves. The solution should return the LCA of the deepest leaves.

Approach:
1. **Depth-First Search (DFS)**: We will traverse the tree using DFS to calculate the depth of each subtree and track the deepest leaves.
2. **Recursive Traversal**: For each node, calculate the depth of its left and right subtrees. If the current node is at the deepest level, it becomes a candidate for the LCA.
3. **Track Deepest Level**: Keep track of the maximum depth and the corresponding LCA for the deepest leaves.
4. **Return the LCA**: Once the traversal is complete, return the LCA of the deepest leaves.
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    lcaDeepestLeaves(root) {
        function dfs(node) {
            if (!node) return [0, null];
            
            let [leftDepth, leftLCA] = dfs(node.left);
            let [rightDepth, rightLCA] = dfs(node.right);
            
            if (leftDepth > rightDepth) {
                return [leftDepth + 1, leftLCA];
            } else if (rightDepth > leftDepth) {
                return [rightDepth + 1, rightLCA];
            } else {
                return [leftDepth + 1, node];
            }
        }
        
        return dfs(root)[1];
    }
}
