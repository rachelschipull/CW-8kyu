//Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.


//p: receive an array (arr) and a number (n which is an integer)
//r: return the n elements from the array
//e: [0, 1, 2, 3, 4, 5, 6], 3 -> returns [0, 1, 2]
//p: use slice as indicated in the directions
// slice starts on a 0 index and n would be the end
// slice(0,n)

function take(arr, n) {
    return arr.slice(0,n)
  }