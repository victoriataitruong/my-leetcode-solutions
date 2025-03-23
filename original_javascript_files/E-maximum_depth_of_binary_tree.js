/*
Leetcode 104: Maximum Depth of Binary Tree

Problem Description:
Given the root of a binary tree, return its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. A leaf is a node with no children. This problem can be solved using a Depth-First Search (DFS) approach.

Approach:
1. **Depth-First Search (DFS)**: Use recursion to traverse the tree, calculating the depth at each node.
2. **Base Case**: If the current node is None, return 0 (no depth).
3. **Recursive Case**: Recursively compute the depth of both the left and right subtrees.
4. **Return the Maximum Depth**: For each node, the depth is 1 plus the maximum depth of its left and right subtrees.

Time complexity: O(n)
Problem Type: 
This algorithm follows a recursive pattern, exploring each branch of the tree before moving back up. Since it explores nodes in a depth-first manner, it's categorized under DFS.
*/


let maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    const leftDepth = maxDepth(root.left);  // Fixed: removed 'this'
    const rightDepth = maxDepth(root.right);  // Fixed: removed 'this'
    return 1 + Math.max(leftDepth, rightDepth);
};

//Example usage:
// Creating a sample binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calling the maxDepth function
let depth = maxDepth(root);

// The tree is:
//         1
//        / \
//       2   3
//      / \
//     4   5

console.log(depth);  // Output: 3

