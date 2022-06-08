// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

//P: receive whole number, positive or negative
//R: for positive numbers, return the sum of all multiples of 3 or 5, do not sum a number twice
// for negative numbers, return 0
//do not return the number in the sum
//E: 10 (3, 6, 9, 5) -> 23
//15 (3, 5, 6, 9, 10, 12) -> 45
//P: new array?
//loop through number, for numbers that are divisible by 3 or 5 push into an array
// reduce the array?

function solution(number){
    let sum = []
    for (let i = 0; i < number; i++){
    if (i % 3 === 0 || i % 5 === 0)
        sum.push(i)
    }
    return sum.reduce((a,c) => a + c, 0)
    } 