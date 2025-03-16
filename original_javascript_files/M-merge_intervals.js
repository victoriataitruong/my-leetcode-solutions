/*
Leetcode 56: Merge Intervals

Problem Description:
Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input. The intervals are sorted by the start time.

Approach:
1. **Sort Intervals**: First, sort the intervals based on the start time. This allows us to easily check for overlapping intervals in a single pass.
2. **Iterate Through the Sorted Intervals**: Loop through each interval, and check if it overlaps with the last merged interval.
3. **Merge Intervals**: If an interval overlaps, we merge it with the last one by updating the end time of the last merged interval.
4. **No Overlap**: If there is no overlap, we add the current interval to the result list.
5. **Return the Result**: At the end, return the list of merged intervals.

*/
class Solution {
    merge(intervals) {
        // Sort the intervals based on the start value of each interval
        intervals.sort((a, b) => a[0] - b[0]);

        // Initialize the result list with the first interval
        let merged = [];

        // Iterate through the sorted intervals
        for (let interval of intervals) {
            // If merged is empty or no overlap, simply add the interval
            if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
                merged.push(interval);
            } else {
                // There is an overlap, so merge the intervals
                merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
            }
        }

        // Return the merged intervals
        return merged;
    }
}

