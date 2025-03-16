/*
Problem: Serialize and Deserialize Binary Tree (Leetcode 297)

You are tasked with implementing an algorithm to **serialize** and **deserialize** a binary tree.
Serialization involves converting a binary tree into a string, while deserialization converts that string back into the original tree.
You should use an efficient approach to perform both operations.

Efficient Approach:
- We use **pre-order traversal** to serialize the binary tree into a string.
- In serialization, each node is recorded by its value, and null nodes are represented by the string "None".
- The deserialization function will reconstruct the tree by parsing the string and recursively rebuilding nodes in the pre-order sequence.
- This approach ensures an optimal time complexity of **O(N)**, where N is the number of nodes in the tree, as we visit each node once.
*/

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        /**
         * Constructor for creating a new TreeNode.
         * @param {number} val - Value of the node (default is 0).
         * @param {TreeNode|null} left - Left child node (default is null).
         * @param {TreeNode|null} right - Right child node (default is null).
         */
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Codec {
    /**
     * Serializes a binary tree to a string.
     * @param {TreeNode|null} root - Root of the binary tree.
     * @return {string} - Serialized string.
     */
    serialize(root) {
        // Helper function for preorder traversal
        const preorder = (node) => {
            if (!node) return ['None']; // Represent null nodes as 'None'
            return [String(node.val), ...preorder(node.left), ...preorder(node.right)];
        };
        return preorder(root).join(',');
    }

    /**
     * Deserializes a string to reconstruct the binary tree.
     * @param {string} data - Serialized string.
     * @return {TreeNode|null} - Root of the reconstructed binary tree.
     */
    deserialize(data) {
        const dataList = data.split(',');

        // Helper function to construct the tree
        const buildTree = () => {
            if (!dataList.length) return null; // Base case for empty list
            const value = dataList.shift(); // Get the first element
            if (value === 'None') return null; // Null node case
            const node = new TreeNode(Number(value)); // Create new TreeNode
            node.left = buildTree();  // Recursively build left subtree
            node.right = buildTree(); // Recursively build right subtree
            return node;
        };
        return buildTree();
    }
}
