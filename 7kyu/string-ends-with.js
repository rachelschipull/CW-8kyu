// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    if (ending.length === 0) return true
    //isolate end of str so you can compare it to ending
return str.substr(-(ending.length)) === ending
}

//the super easy answer I couldn't get to work for some reason: 

function solution(str, ending){
    return str.endsWith(ending);
}