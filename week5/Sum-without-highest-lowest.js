// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


function sumArray(array) {
    //filter through array and remove min and max
     //return sum of remaining numbers
     // if null is given return 0

    return (!Array.isArray(array) || !array.length) ? 0 : array.sort((a, b) => a-b).slice(1, array.length-1).reduce((c, d) => c +d, 0)
}
   //   Tried this first but it didn't account for doubles:
   //   const max = Math.max(...array)
   //   const minusMax = array.filter( n => n !== max)

   //   const min = Math.min(...minusMax)
   //   const minusMin = minusMax.filter( n => n !== min)

   //  return minusMin.reduce((a,c) => a + c, 0)
