/*
Leetcode 70: Climbing Stairs

Problem Description:
Given an integer `n` representing the total number of steps in a staircase, you can climb either 1 or 2 steps at a time. Your task is to return the number of distinct ways to reach the top. The solution must be solved in **O(n)** time complexity, where `n` is the number of steps.

Problem Type: Dynamic Programming

Time complexity: O(n)

Approach:
1. **Base Cases**: If there are 0 or 1 steps, there's only one way to reach the top.
2. **Dynamic Programming**: Use two variables to keep track of the number of ways to reach the last two steps. For each step, the number of ways to reach it is the sum of the previous two steps.
3. **Iterate Through the Steps**: Starting from step 2, iteratively calculate the number of ways to reach each step based on the previous two steps.
4. **Return the Result**: After iterating through the steps, the result will be stored in the variable for the last step.

Example: 4
ways to get to step 4 = ways to step 3 + ways to step 2
With steps 0 and 1 the answer will always be 1, we will always start with step 2

i       current (ways to step i)			prev2 (ways to step i-2)        prev1 (ways to step i-1)
2		2								    1                               2                                  
3       3                                   2                           	3
4       5                                   3                           	5          

return 5
*/

let climbStairs = function(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let prev2 = 1; 
    let prev1 = 1; 

    for (let i = 2; i <= n; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

// Example usage:
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3

