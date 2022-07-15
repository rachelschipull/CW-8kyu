//Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

function isPalindrome(line) {
    let lineString = line.toString()
    if (lineString === lineString.split('').reverse().join('')){
        return true
    }else{
        return false
    }
}

//using implicit return (which is how I wanted to do it)

// function isPalindrome(line) {
//     return (line.toString() == line.toString().split('').reverse().join(''));
//   }