// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
    //split string
    //filter out a, e, i, o, u,
    //set condition to skip A,E,I,O,U
    return string.split('').filter(x => (x !== "e")).filter(x => (x !== "a")).filter(x =>(x !== "i")).filter(x =>(x !== "o")).filter(x => (x !== "u")).join('');
}