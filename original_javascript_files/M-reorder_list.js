/*
Leetcode 143: Reorder List

Problem Description:
Given a singly linked list, reorder it such that the nodes are rearranged in the following order: 
L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → L3 → Ln-3 → .... You must solve it in O(n) time complexity and O(1) space complexity.

Approach:
1. **Find the Middle of the List**: Use the slow and fast pointer technique to find the middle node of the linked list.
2. **Reverse the Second Half**: Reverse the second half of the linked list starting from the middle.
3. **Merge the Two Halves**: Merge the first half and the reversed second half by alternating the nodes.
*/

// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    reorderList(head) {
        if (!head || !head.next) return;

        // Step 1: Find the middle of the linked list
        let slow = head, fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse the second half of the linked list
        let secondHalf = slow.next;
        slow.next = null;  // Break the list into two halves
        let prev = null;
        while (secondHalf) {
            let nextNode = secondHalf.next;
            secondHalf.next = prev;
            prev = secondHalf;
            secondHalf = nextNode;
        }

        // Step 3: Merge the two halves
        let firstHalf = head;
        secondHalf = prev;
        while (secondHalf) {
            // Save the next nodes
            let tmp1 = firstHalf.next;
            let tmp2 = secondHalf.next;

            // Reorder the nodes
            firstHalf.next = secondHalf;
            secondHalf.next = tmp1;

            // Move the pointers forward
            firstHalf = tmp1;
            secondHalf = tmp2;
        }
    }
}

