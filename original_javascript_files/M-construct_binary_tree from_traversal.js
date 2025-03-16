/*
Leetcode 105: Construct Binary Tree from Preorder and Inorder Traversal

Problem Description:
Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return the binary tree.

Constraints:
- 1 <= preorder.length <= 3000
- inorder.length == preorder.length
- -3000 <= preorder[i], inorder[i] <= 3000
- `preorder` and `inorder` consist of unique values.
- Each value in `inorder` appears exactly once in `preorder`.
- The assumption is that the given traversals are valid and represent the same binary tree.

Approach:
1. **Base Condition:** If there are no elements in `preorder` or `inorder`, return `None` (empty tree).
2. **Root Node Identification:** The first element in `preorder` is always the root of the current subtree.
3. **Index Mapping:** Use a dictionary to map each value in `inorder` to its index for O(1) lookup.
4. **Recursive Construction:** Recursively build the left and right subtrees by dividing the `inorder` array around the root index.
5. **Return the Root Node:** The tree will be constructed recursively following this logic.
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
    buildTree(preorder, inorder) {
        if (!preorder.length || !inorder.length) return null;

        // Dictionary to store the index of each value in inorder for quick access
        const indexMap = {};
        inorder.forEach((value, index) => {
            indexMap[value] = index;
        });

        // Helper function to build the tree recursively
        const arrayToTree = (preLeft, preRight, inLeft, inRight) => {
            if (preLeft > preRight) return null; // Base condition for recursion

            // Root value is always the first element in the preorder traversal
            const rootValue = preorder[preLeft];
            const root = new TreeNode(rootValue);

            // Find the root index in the inorder array
            const rootIndex = indexMap[rootValue];

            // Calculate the size of the left subtree
            const leftTreeSize = rootIndex - inLeft;

            // Recursively build the left subtree
            root.left = arrayToTree(preLeft + 1, preLeft + leftTreeSize, inLeft, rootIndex - 1);

            // Recursively build the right subtree
            root.right = arrayToTree(preLeft + leftTreeSize + 1, preRight, rootIndex + 1, inRight);

            return root;
        };

        // Construct the tree starting from the full range of preorder and inorder
        return arrayToTree(0, preorder.length - 1, 0, inorder.length - 1);
    }
}
