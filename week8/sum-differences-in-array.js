// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// [2, 1, 10]  ->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 ( Nothing in Haskell ).

function sumOfDifferences(arr) {
    //P: receive an array of integers (positive and negative)
    //R: single whole number (sum of consecutive pairs)
    //E: [2, 1, 10] -> 9 (10-2)+(2-1) = 8 + 1 = 9
    //[-3, -2, -1] -> 2 (-3 - -2) + (-2 - -1) = 1 + 1 = 2
    //P: first set up a new array to catch the added numbers
    // then create a map function to loop through arr
    //use slice to determine which two numbers are beind subtracted
    //push into the new array
    //return new array.reduce()
    //note: much easier to do this with the spread operator
     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
  }