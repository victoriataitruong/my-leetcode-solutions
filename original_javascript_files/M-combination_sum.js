/*
Leetcode 39: Combination Sum

Problem Description:
Given an array of distinct integers `candidates` and a target integer `target`, 
return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. 
You may reuse the same number from `candidates` an unlimited number of times.

Approach:
1. **Backtracking**: We will use a backtracking approach to explore all possible combinations of numbers from `candidates` that sum up to `target`.
2. **Recursion**: The recursion will try to add elements from `candidates` repeatedly until the target is reached or exceeded.
3. **Pruning**: If at any point the sum exceeds the target, we backtrack and try different combinations.
4. **Storing Results**: Whenever a valid combination (sum equals target) is found, it will be added to the result list.
*/

class Solution {
    combinationSum(candidates, target) {
        // Initialize the result array to store all valid combinations
        const result = [];

        // Helper function to perform backtracking
        const backtrack = (start, target, currentCombination) => {
            // Base case: if target is 0, we have found a valid combination
            if (target === 0) {
                result.push([...currentCombination]); // Make a copy of currentCombination
                return;
            }

            // Explore the candidates starting from the current index
            for (let i = start; i < candidates.length; i++) {
                // If the current number is greater than the remaining target, skip it
                if (candidates[i] > target) continue;

                // Add the current number to the current combination
                currentCombination.push(candidates[i]);
                // Recursively call backtrack, keeping index i to allow repeated usage of the same number
                backtrack(i, target - candidates[i], currentCombination);
                // Backtrack: remove the last added number to try another combination
                currentCombination.pop();
            }
        };

        // Start backtracking with an initial empty combination and target
        backtrack(0, target, []);
        // Return the result array containing all valid combinations
        return result;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.combinationSum([2, 3, 6, 7], 7));  // Output: [[2, 2, 3], [7]]
