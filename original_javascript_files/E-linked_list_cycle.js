/*
Leetcode 141: Linked List Cycle

Problem Description:
Given a linked list, determine if it has a cycle in it. A cycle means that the linked list's last node points to one of the previous nodes, creating a loop. If there is no cycle, return false. If there is a cycle, return true. The solution should be solved in **O(n)** time complexity, where `n` is the number of nodes in the linked list.

Approach:
1. **Floyd’s Cycle-Finding Algorithm (Tortoise and Hare)**: Use two pointers, one moving slowly (tortoise) and one moving fast (hare).
2. **Slow and Fast Pointer Movement**: Move the slow pointer by one step and the fast pointer by two steps. If the linked list has a cycle, the fast pointer will eventually meet the slow pointer.
3. **Return True or False**: If the slow pointer meets the fast pointer, return true (cycle exists). If the fast pointer reaches the end of the list (null), return false (no cycle).

Time complexity: O(n)
Problem Type: 
Two Pointers (Fast & Slow)
Floyd's Cycle Detection Algorithm (also known as the Tortoise and Hare algorithm)

*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


var hasCycle = function(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) { //checks fast and fast.next to ensure no run time error, slow moves one at a time so will safely land at then end
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        
        return false;
    }

// Example usage:
// Creating nodes
const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);

// Connecting nodes to form a cycle: 3 → 2 → 0 → -4 → (back to node2)
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Cycle formed here

console.log(hasCycle(node1)); // true



