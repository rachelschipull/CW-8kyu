// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

//P: array including a string of numbers, separated by commas
//R: remove the first and last characters and the commas (join with spaces instead)
//if string contains 2 or fewer characters, return NULL
//E: "1,2,3" -> "2"
// "1,2,3,4,5" -> "2 3 4"
// "1" -> NULL
//"" -> NULL
//P: split string at commas
//splice at index 1 to -1?
// join with " "
// if arr.length < 2 return NULL

function array(arr){
    return arr.split(",").slice(1,-1).join(' ') || null
}