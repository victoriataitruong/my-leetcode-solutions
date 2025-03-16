/*
Leetcode 572: Subtree of Another Tree

Problem Description:
Given two binary trees `root` and `subRoot`, return true if there is a subtree of `root` that is an exact match with `subRoot`. A subtree of a tree is a tree that consists of a node in the tree and all its descendants. The solution must be solved efficiently, ideally in **O(n)** time complexity, where `n` is the number of nodes in the tree.

Approach:
1. **DFS with Tree Comparison**: We perform a depth-first search (DFS) to check if the tree rooted at the current node of `root` is identical to `subRoot`.
2. **Helper Function to Check Identity**: Use a helper function to compare two trees node by node. If they are identical, return true.
3. **Traverse the Root Tree**: We traverse the tree `root` using DFS and call the helper function to check if the subtree rooted at each node matches `subRoot`.
4. **Return Result**: If a match is found at any node, return true, otherwise, return false.

*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    isSubtree(root, subRoot) {
        // If subRoot is null, it is trivially a subtree of any tree
        if (!subRoot) return true;
        
        // If root is null, subRoot can't be a subtree
        if (!root) return false;
        
        // Check if the current root's tree matches subRoot
        if (this.isIdentical(root, subRoot)) return true;
        
        // Recurse through left and right subtrees of root
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isIdentical(root1, root2) {
        // If both trees are empty, they are identical
        if (!root1 && !root2) return true;
        
        // If one of the trees is empty and the other is not, they are not identical
        if (!root1 || !root2) return false;
        
        // If the values of the current nodes are different, the trees are not identical
        if (root1.val !== root2.val) return false;
        
        // Recursively check the left and right subtrees
        return this.isIdentical(root1.left, root2.left) && this.isIdentical(root1.right, root2.right);
    }
}
