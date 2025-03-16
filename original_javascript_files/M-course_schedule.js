/*
Leetcode 207: Course Schedule

Problem Description:
You are given a number of courses, each with prerequisites, and you need to determine if it's possible to finish all the courses. Each course may have prerequisites, represented as a directed graph where an edge from course `a` to course `b` means that course `a` is a prerequisite for course `b`. The problem asks if it's possible to complete all courses without encountering a cycle. If a cycle exists in the graph, it would be impossible to finish the courses. The solution must return `True` if it's possible to finish all courses, and `False` otherwise.

Approach:
1. **Topological Sorting Using Kahn’s Algorithm**: This approach uses a graph and in-degree of each node (course). We perform a BFS starting from courses with no prerequisites and reduce the in-degree of other courses as we complete each course.
2. **Check for Cycles**: If, after processing all courses, there are still courses with non-zero in-degree, it means there is a cycle, and completing all courses is impossible.
3. **Return True or False**: If all courses are processed successfully, return `True`. If a cycle is detected, return `False`.
*/

class Solution {
    canFinish(numCourses, prerequisites) {
        // Step 1: Create an adjacency list (graph) and an array to store in-degrees
        const graph = Array.from({ length: numCourses }, () => []); // Adjacency list
        const inDegree = Array(numCourses).fill(0); // Array to store in-degree of each course

        // Step 2: Build the graph and fill the in-degree array
        for (const [dest, src] of prerequisites) {
            graph[src].push(dest); // src -> dest (course src is a prerequisite for course dest)
            inDegree[dest]++; // Increase in-degree for the destination course
        }

        // Step 3: Initialize a queue for courses with no prerequisites (in-degree 0)
        const queue = []; // Courses with no prerequisites
        for (let i = 0; i < numCourses; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }

        // Step 4: Process the courses using BFS (Kahn's Algorithm)
        let completedCourses = 0; // Count of processed (completed) courses

        while (queue.length > 0) {
            const course = queue.shift(); // Get a course with no prerequisites
            completedCourses++; // We can complete this course

            // Reduce the in-degree of the adjacent courses
            for (const neighbor of graph[course]) {
                inDegree[neighbor]--; // Remove one prerequisite
                if (inDegree[neighbor] === 0) {
                    queue.push(neighbor); // If no prerequisites left, add it to the queue
                }
            }
        }

        // Step 5: Check if we were able to process all courses
        return completedCourses === numCourses; // True if all courses are completed
    }
}
