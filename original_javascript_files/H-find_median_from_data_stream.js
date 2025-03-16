/*
Leetcode 295: Find Median from Data Stream

Problem Description:
The problem requires designing a data structure that efficiently supports the following operations:
1. addNum(int num) - Adds a number to the data structure.
2. findMedian() - Returns the median of all numbers added so far.

Efficient Approach:
We use a two-heap solution:
- A max-heap (left) to store the smaller half of the numbers.
- A min-heap (right) to store the larger half of the numbers.

The heaps are balanced such that:
- The max-heap (left) has at most one more element than the min-heap (right).
- The median is either the max of the max-heap (if odd total count) or the average of both heap tops (if even total count).

Time Complexity:
- addNum: O(log n) due to heap insertion.
- findMedian: O(1) since it only looks at the tops of the heaps.
*/

class MedianFinder {
    constructor() {
        this.left = [];  // Max heap (simulated with negative values)
        this.right = []; // Min heap
    }

    // Helper function to insert into a heap (binary insertion for sorted arrays)
    insert(heap, value) {
        let idx = heap.findIndex((x) => x > value);
        if (idx === -1) heap.push(value);
        else heap.splice(idx, 0, value);
    }

    addNum(num) {
        // Insert into the max heap (left) as a negative value
        this.insert(this.left, -num);

        // Balance heaps
        if (this.left.length && this.right.length && (-this.left[0] > this.right[0])) {
            this.insert(this.right, -this.left.shift());
        }

        // Ensure balance between heaps
        if (this.left.length > this.right.length + 1) {
            this.insert(this.right, -this.left.shift());
        } else if (this.right.length > this.left.length) {
            this.insert(this.left, -this.right.shift());
        }
    }

    findMedian() {
        if (this.left.length > this.right.length) {
            return -this.left[0]; // Odd number of elements
        }
        return (-this.left[0] + this.right[0]) / 2.0; // Even number of elements
    }
}

// Example usage
const finder = new MedianFinder();
finder.addNum(1);
finder.addNum(2);
console.log(finder.findMedian()); // Output: 1.5
finder.addNum(3);
console.log(finder.findMedian()); // Output: 2
