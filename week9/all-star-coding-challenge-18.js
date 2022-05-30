// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter){  
    //P:receive two strings, one or both strings can be empty, the second string is one character
    //R: return the count (integer) of how many times the character in the second string appears in the first
    //E: "hello", "o" -> 1
    // "hello", "l" -> 2
    // "", "r" -> 0
    //P: split str into an array
    // forEach compare to letter
    //if str.[i] === letter += count
    //return count
return str.split(letter).length-1
}