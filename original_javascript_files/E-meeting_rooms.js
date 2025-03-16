/*
Leetcode 252: Meeting Rooms

Problem Description:
You are given an array of intervals where each interval is represented as a pair `[start, end]`, where `start` is the start time and `end` is the end time of a meeting. The task is to determine if a person can attend all meetings. A person can attend all meetings if and only if no two meetings overlap in time. If there is any overlap between two meetings, return `false`; otherwise, return `true`.

Approach:
1. **Sort the Intervals**: Sort the intervals based on their start times. Sorting helps us to check only adjacent meetings for potential overlaps.
2. **Check for Overlaps**: After sorting, iterate through the intervals and compare each meeting with the next. If the end time of the current meeting is greater than the start time of the next meeting, we have an overlap.
3. **Return Result**: If any overlap is found, return `false`. Otherwise, return `true` after checking all meetings.

*/
class Solution {
    canAttendMeetings(intervals) {
        // Step 1: Sort the intervals based on the start time of each meeting.
        intervals.sort((a, b) => a[0] - b[0]);

        // Step 2: Iterate through the sorted intervals to check for overlaps.
        for (let i = 1; i < intervals.length; i++) {
            // Step 3: Compare the end time of the current meeting with the start time of the next.
            if (intervals[i - 1][1] > intervals[i][0]) {
                return false; // Overlap detected
            }
        }

        // Step 4: If no overlap was found, return true.
        return true;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.canAttendMeetings([[0, 30], [5, 10], [15, 20]])); // false
console.log(solution.canAttendMeetings([[7, 10], [2, 4]])); // true

