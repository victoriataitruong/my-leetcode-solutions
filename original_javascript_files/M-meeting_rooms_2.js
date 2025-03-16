/*
Leetcode 252: Meeting Rooms

Problem Description:
Given an array of meeting time intervals where intervals[i] = [start, end], 
determine if a person could attend all meetings. The person can attend all meetings if no two meetings overlap. 
The solution should be solved in **O(n log n)** time complexity, where `n` is the number of intervals.

Approach:
1. **Sort the Intervals**: Sort the meeting intervals based on the start time.
2. **Iterate Through the Intervals**: Check if there is an overlap between the current meeting and the previous one by comparing the start time of the current meeting with the end time of the previous one.
3. **Return the Result**: If there is any overlap, return False. Otherwise, return True.
*/
class Solution {
    canAttendMeetings(intervals) {
        // Step 1: Sort the intervals based on the start time of each meeting
        intervals.sort((a, b) => a[0] - b[0]);

        // Step 2: Iterate through the sorted intervals to check for overlaps
        for (let i = 1; i < intervals.length; i++) {
            // Check if the current meeting's start time is before the previous meeting's end time
            if (intervals[i][0] < intervals[i - 1][1]) {
                return false; // If there is an overlap, return false
            }
        }

        // Step 3: If no overlap is found, return true
        return true;
    }
}
