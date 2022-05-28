// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    //P: receive two whole numbers, positive or negative, a < b
    //R: return a through b including all the whole numbers in between in an array
    //E: a = 1, b = 4 return [1, 2, 3, 4]
    // a = -1, b = 2 retrun [-1, 0, 1, 2]
    //P: create a new array
    // for loop that starts at a and ends at b
    //push i into the array every time.
    const arr = []
    for (i = a; i <= b; i++){
    arr.push(i)
    }
    return arr
}