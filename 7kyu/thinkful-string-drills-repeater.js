// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"

//P: two arguments, string and a number
//R: return the first argument in a string repeated n times
//E: ('a', 5) -> 'aaaaa'
//P: repeat string n times using method
function repeater(string, n){
    return string.repeat(n)
}