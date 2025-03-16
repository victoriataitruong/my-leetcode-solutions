/*
Leetcode 102: Binary Tree Level Order Traversal

Problem Description:
Given the root of a binary tree, return the level order traversal of its nodes' values 
(i.e., from left to right, level by level).

Approach:
1. **BFS (Breadth-First Search)**: Use a queue to traverse the tree level by level.
2. **Queue Structure**: Each entry in the queue will hold a node and its level information.
3. **Tracking Levels**: Maintain a list of lists to store node values at each level.
4. **Result Building**: As you visit each node, append its value to the appropriate level list.

Complexity Analysis:
- **Time Complexity**: O(n) — Each node is visited once.
- **Space Complexity**: O(n) — In the worst case, the queue could hold all nodes at the deepest level.
*/
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    levelOrder(root) {
        // If the tree is empty, return an empty array
        if (!root) return [];

        // Initialize the queue with the root node and its level
        const queue = [{ node: root, level: 0 }];
        const result = [];

        // BFS traversal
        while (queue.length > 0) {
            // Dequeue the front element
            const { node, level } = queue.shift();

            // If this is the first node in a new level, add a new array
            if (result.length === level) {
                result.push([]);
            }

            // Append the current node's value to the correct level
            result[level].push(node.val);

            // Add the left and right children to the queue with their corresponding level
            if (node.left) {
                queue.push({ node: node.left, level: level + 1 });
            }
            if (node.right) {
                queue.push({ node: node.right, level: level + 1 });
            }
        }

        // Return the collected level order traversal
        return result;
    }
}

