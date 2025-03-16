/*
Leetcode 347: Top K Frequent Elements

Problem Description:
Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. 
You may return the answer in any order. The solution must run in **O(n)** time complexity, 
where `n` is the number of elements in the array.

Approach:
1. **Hash Map for Frequency Count**: Create a dictionary to count the frequency of each element in `nums`.
2. **Bucket Sort**: Use an array where the index represents frequency, and each entry stores the elements with that frequency.
3. **Build the Result**: Iterate through the bucket array from highest frequency to lowest, appending elements to the result list until it reaches `k` elements.
*/
class Solution {
    topKFrequent(nums, k) {
        // Map to store frequency counts
        let freqMap = new Map();
        for (let num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        // Create a bucket array where index represents frequency
        let bucket = Array(nums.length + 1).fill().map(() => []);
        for (let [num, freq] of freqMap.entries()) {
            bucket[freq].push(num);
        }

        // Collect the top k frequent elements
        let result = [];
        for (let i = bucket.length - 1; i > 0; i--) {  // Traverse from highest frequency to lowest
            for (let num of bucket[i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}

