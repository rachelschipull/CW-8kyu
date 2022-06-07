// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

//P: string with one or more elements, separated by a space, elements are words with length
//R: an array with comma separate strings including the element, a space, and the number of letters in the word
//E: "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
//P: split at the space
// loop through the array, retrun x.length
//map with "x x.length"

function addLength(str) {
  return str.split(' ').map( words => `${words} ${words.length}`)
}