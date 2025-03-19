/*
Leetcode 121: Best Time to Buy and Sell Stock

Problem Description:
You are given an array `prices` where `prices[i]` represents the price of a given stock on the `i-th` day. You want to maximize your profit by choosing a single day to buy one stock and choosing a later day to sell that stock. Return the maximum profit you can achieve from this transaction. If no profit can be made, return `0`. The solution must be solved in **O(n)** time complexity, where `n` is the number of days.

Problem Type: Greedy

Time complexity: O(n)

Approach:
1. **Track the Minimum Price**: Keep track of the lowest price encountered so far as you iterate through the list of prices.
2. **Calculate Potential Profit**: For each price, calculate the potential profit by subtracting the minimum price from the current price.
3. **Track Maximum Profit**: Keep track of the maximum profit by comparing the current profit with the previously recorded maximum profit.
4. **Return the Maximum Profit**: After iterating through the list, return the maximum profit found. If no profit is possible, return 0.

Example: [7,1,5,3,6,4]
initally            minPrice = Infinity             maxProfit = 0
price[i] = 7        minPrice = 7                    maxProfit = 0
price[i] = 1        minPrice = 1                    maxProfit = 0
price[i] = 5        minPrice = 1                    maxProfit = 4
price[i] = 3        minPrice = 1                    maxProfit = 4
price[i] = 6        minPrice = 1                    maxProfit = 5
price[i] = 4        minPrice = 1                    maxProfit = 5

return 5
*/

let maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i =0; i < prices.length; i++){
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }
    return maxProfit;
}
