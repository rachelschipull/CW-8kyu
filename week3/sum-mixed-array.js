// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    //map or math to turn all strings to integers
     const allNum = x.map(num => Number(num));
     // use reduce to sum the numbers together
    return allNum.reduce((a, b) => a + b);
   }