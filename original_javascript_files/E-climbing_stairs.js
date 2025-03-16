/*
Leetcode 70: Climbing Stairs

Problem Description:
Given an integer `n` representing the total number of steps in a staircase, you can climb either 1 or 2 steps at a time. Your task is to return the number of distinct ways to reach the top. The solution must be solved in **O(n)** time complexity, where `n` is the number of steps.

Approach:
1. **Base Cases**: If there are 0 or 1 steps, there's only one way to reach the top.
2. **Dynamic Programming**: Use two variables to keep track of the number of ways to reach the last two steps. For each step, the number of ways to reach it is the sum of the previous two steps.
3. **Iterate Through the Steps**: Starting from step 2, iteratively calculate the number of ways to reach each step based on the previous two steps.
4. **Return the Result**: After iterating through the steps, the result will be stored in the variable for the last step.

*/
class Solution {
    climbStairs(n) {
        // Base cases: if there are no steps or only one step, there's only one way to climb
        if (n === 0 || n === 1) {
            return 1;
        }

        // Initialize two variables to represent the number of ways to reach the last two steps
        let prev2 = 1; // prev2 corresponds to the number of ways to reach step n-2
        let prev1 = 1; // prev1 corresponds to the number of ways to reach step n-1

        // Iterate from step 2 to n to calculate the number of ways for each step
        for (let i = 2; i <= n; i++) {
            // The current number of ways to reach step i is the sum of the previous two steps
            let current = prev1 + prev2;
            // Update prev2 and prev1 for the next iteration
            prev2 = prev1;
            prev1 = current;
        }

        // After the loop ends, prev1 contains the number of ways to reach step n
        return prev1;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.climbStairs(5)); // Output: 8
