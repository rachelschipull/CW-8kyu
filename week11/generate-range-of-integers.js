//Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

//P: minimum integer (starting value), max integer (ending value), and interval (step)
//R: an array that starts with min, ends with max, and has the correct step
//E: 2, 10, 2 -> [2, 4, 6, 8, 10]
// 1, 10, 3 -> [1, 4, 7, 10]
//P: for loop using the parameters in the function

function generateRange(min, max, step){ 
    let arr = []
    for (let i = min; i <= max; i+=step){
    arr.push(i)
    }
return arr
}