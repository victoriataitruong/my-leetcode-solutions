/*
Leetcode 100: Same Tree

Problem Description:
Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Approach:
1. **Base Case 1**: If both trees are `None`, they are considered the same.
2. **Base Case 2**: If one tree is `None` and the other is not, they are not the same.
3. **Node Value Check**: If the values of the nodes are different, return `False`.
4. **Recursive Check**: Recursively check the left and right subtrees of both trees.
5. **Return the Result**: If both subtrees are the same, return `True`.
*/

class Solution {
    isSameTree(p, q) {
        // Base case: if both trees are null, they are the same
        if (!p && !q) {
            return true;
        }

        // Base case: if one tree is null and the other is not, they are not the same
        if (!p || !q) {
            return false;
        }

        // If the values at the current nodes are different, return false
        if (p.val !== q.val) {
            return false;
        }

        // Recursively check the left and right subtrees of both trees
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}

