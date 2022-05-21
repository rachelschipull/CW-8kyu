// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])


function oddCount(n){
    //P: a positive integer, could be zero? but probably a large number
     //R: the number (positive count) of positive odd numbers below that number, could be zero?
     //E: 7 -> 3 because [1, 3, 5] are positive odd integers below 7 (does not include 7)
     // 15 -> 7 because [1, 3, 5, 7, 9, 11, 13] are all positive odd integers below 15
     //P: 
     //the number of odd numbers is essentially half no matter what you do, use Math.floor to round down
     //that way it will not include n
    return Math.floor(n/2)
}