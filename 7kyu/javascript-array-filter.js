// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

//P: recevie an array of whole number integers even and odd
//R: return an array with the odd numbers removed
//E: [2, 4, 5, 6,] -> [2, 4, 6]
//[13, 15] -> []
//P: use the filter method 
//use % 2 === 0 to remove odd numbers

function getEvenNumbers(numbersArray){
    return numbersArray.filter(x => x % 2 === 0)
}
