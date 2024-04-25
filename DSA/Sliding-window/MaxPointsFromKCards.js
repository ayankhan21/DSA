// GIVEN AN ARRAY OF POINTS ( OF EACH CARD ) AND GIVEN K = "N" NUMBER OF CARDS TO BE PICKED.
// CARDS CAN ONLY BE PICKED FROM THE ENDS OF THE ARRAY
// Example - K = 4
// FIRST 4 / LAST 4 / FIRST 2 + LAST 2 / FIRST 1 + LAST 3 / FIRST 3 + LAST 1
// MAIN OBJECTIVE - GET MAX POINTS BY PICKING "K" CARDS

// USING SLIDING WINDOW TECHNIQUE

// TIME COMPLEXITY - O(K) - 2 LOOPS EACH RUNNING FOR K TIMES
// SPACE COMPLEXITY = O(1)

let ele = [12, 23, 34, 45, 56, 67, 78, 89, 90];
let k = 4;
let n = ele.length;

function maxPointsFromKCards(elements, K) {
  // Initialize all the variables.
  let leftSum = 0;
  let rightSum = 0;
  let maxSum = 0;
  let r = n - 1; // right index to start from end of array.

  // Step 1 - Add all K cards from the start.
  for (let i = 0; i < k; i++) {
    leftSum += elements[i];
  }

  // Step 2 - Start removing 1 element from left and start adding one from right end.

  for (let i = k - 1; i >= 0; i--) {
    leftSum -= elements[i];
    rightSum += elements[r];
    r--; // taking right index from end towards the card limit.
    maxSum = Math.max(maxSum, leftSum + rightSum); // store the max of present sum and maxSum.
  }
  return maxSum;
}
console.log(maxPointsFromKCards(ele, k));
