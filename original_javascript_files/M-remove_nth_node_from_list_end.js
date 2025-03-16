/*
Leetcode 19: Remove N-th Node From End of List

Problem Description:
Given the head of a linked list, remove the n-th node from the end of the list and return its head. 
The list has at least one node and you need to solve it in one-pass with constant space complexity.

Approach:
1. **Two Pointer Technique**: Use two pointers, both starting at the head of the list.
2. **Advance First Pointer**: Move the first pointer `n` steps ahead.
3. **Move Both Pointers Together**: Then, move both pointers one step at a time until the first pointer reaches the end of the list.
4. **Remove the Node**: When the first pointer reaches the end, the second pointer will be at the node just before the one to be removed. Adjust the next pointer of the second pointer to remove the target node.
5. **Edge Cases**: Consider when the n-th node to be removed is the head node itself.
*/

// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    removeNthFromEnd(head, n) {
        // Create a dummy node to handle edge cases, especially when the head needs to be removed
        let dummy = new ListNode(0);
        dummy.next = head;

        // Initialize two pointers, both pointing to the dummy node initially
        let first = dummy;
        let second = dummy;

        // Move the first pointer `n+1` steps ahead so that the gap between first and second is `n`
        for (let i = 0; i <= n; i++) {
            first = first.next;
        }

        // Move both pointers one step at a time until the first pointer reaches the end
        while (first !== null) {
            first = first.next;
            second = second.next;
        }

        // The second pointer is now just before the node to be removed, so skip the node
        second.next = second.next.next;

        // Return the new head of the list (dummy.next handles the case when head is removed)
        return dummy.next;
    }
}

