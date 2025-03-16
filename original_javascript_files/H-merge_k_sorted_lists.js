/*
Problem: Merge k Sorted Lists (Leetcode 23)

You are given an array of k linked lists, where each linked list is sorted in ascending order. 
Your task is to merge all these k linked lists into one sorted linked list and return the head of the merged list.

Efficient Approach:
- We use a **min-heap (priority queue)** to keep track of the smallest element among the k lists.
- Extract the minimum element from the heap, add it to the result list, and push the next element from that list into the heap.
- This approach ensures an optimal time complexity of **O(N log k)**, where N is the total number of nodes and k is the number of lists.
*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this.heap.sort((a, b) => a.val - b.val); // Maintain min-heap property
    }

    pop() {
        return this.heap.shift();
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

class Solution {
    static mergeKLists(lists) {
        if (!lists || lists.length === 0) return null; // Edge case

        const minHeap = new MinHeap();

        // Add the first node of each list to the heap
        for (let i = 0; i < lists.length; i++) {
            if (lists[i]) {
                minHeap.push(lists[i]);
            }
        }

        const dummy = new ListNode(0); // Dummy node for easier list construction
        let curr = dummy; // Pointer to build the merged list

        while (!minHeap.isEmpty()) {
            const node = minHeap.pop(); // Get the smallest node
            curr.next = node; // Attach to result list
            curr = curr.next; // Move pointer forward

            if (node.next) {
                minHeap.push(node.next); // Add the next node from the same list
            }
        }

        return dummy.next; // Return the merged list's head
    }
}

