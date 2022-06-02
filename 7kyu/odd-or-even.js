// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
    //P: intergers to sum, [0] is considered even
    //R: return "even" or "odd" after you sum the input array
    //E: [0] -> "even"
    // [0, 1, 4] -> "odd"
    // [0, -1, -4] -> "even"
    //P: create a new array with reduce
    //use the modulus operator to determine if the new array is even or odd
    //return "even" or "odd"
    const redArray = array.reduce((a,b) => a + b, 0);
    return (redArray % 2 === 0) ? "even" : "odd";
}