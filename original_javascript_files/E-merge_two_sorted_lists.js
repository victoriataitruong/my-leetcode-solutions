/*
Leetcode 21: Merge Two Sorted Lists

Problem Description:
Given the heads of two sorted linked lists `l1` and `l2`, merge them into a single sorted list and return its head. The merge should be done in a way that maintains the order of elements. The solution should work in **O(n + m)** time complexity, where `n` and `m` are the lengths of the two input linked lists.

Approach:
1. **Dummy Node**: Create a dummy node that serves as the starting point of the merged list. This helps simplify edge cases where one of the lists might be empty.
2. **Two Pointers**: Use two pointers to traverse both `l1` and `l2`. Compare the current nodes and attach the smaller node to the merged list.
3. **Exhaust Remaining Nodes**: Once one of the lists is fully traversed, attach the remaining elements of the other list to the merged list.
4. **Return the Merged List**: Return the next node of the dummy node, which points to the merged list.
*/

// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    mergeTwoLists(l1, l2) {
        // Create a dummy node to simplify the merge process
        const dummy = new ListNode(0);
        // Initialize the current pointer to the dummy node
        let current = dummy;

        // Traverse both lists until one of them is fully traversed
        while (l1 && l2) {
            // Compare the current nodes of both lists and add the smaller one to the merged list
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            // Move the current pointer to the newly added node
            current = current.next;
        }

        // If one list is exhausted, append the other list to the merged list
        if (l1) {
            current.next = l1;
        } else if (l2) {
            current.next = l2;
        }

        // Return the merged list, starting from the node after the dummy node
        return dummy.next;
    }
}

