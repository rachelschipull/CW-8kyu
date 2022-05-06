// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

function divisibleBy(numbers, divisor){
    //return [...numbers].filter(num=>num%divisor===0);
   //create array
    //loop through numbers
    //use modulus to determine if numbers equal 0 with divisor
    // push true answers to new array
    const array = []
    for (let i = 0; i <= numbers.length; i++){
      if ( numbers[i] % divisor === 0){
     array.push(numbers[i])
      } 
    }
    return array;
  }