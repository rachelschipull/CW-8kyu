//Find the mean (average) of a list of numbers in an array.

//P: array of whole number integers
//R: the mean/average of those numbers
//E: [1, 3, 5, 7] -> 4
//P: reduce to find total and divide by the number of values in the array


var findAverage = function (nums) {
    return nums.reduce((a, b) => a+b, 0)/nums.length
  }