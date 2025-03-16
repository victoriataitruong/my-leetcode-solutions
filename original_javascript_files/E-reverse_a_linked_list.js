/*
Leetcode 206: Reverse Linked List

Problem Description:
Given the head of a singly linked list, reverse the list and return its reversed head.

For example:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Approach:
1. **Pointers**: Initialize two pointers: `prev` (to keep track of the previous node) and `current` (to traverse the list).
2. **Traverse and Reverse**: Iterate through the linked list. For each node, store the next node, reverse the current node's `next` pointer to point to `prev`, and then move both `prev` and `current` one step forward.
3. **Return Reversed List**: After the iteration, `prev` will be pointing to the new head of the reversed linked list.
*/

// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    reverseList(head) {
        let prev = null;
        let current = head;

        while (current) {
            // Temporarily store the next node
            let nextNode = current.next;
            // Reverse the link: point current node's next to prev
            current.next = prev;
            // Move prev and current one step forward
            prev = current;
            current = nextNode;
        }

        // Return prev as the new head after the reversal is complete
        return prev;
    }
}

