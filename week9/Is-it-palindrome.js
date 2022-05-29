//Write a function that checks if a given string (case insensitive) is a palindrome.//

function isPalindrome(x) {
    //P: receive string 'x', it is not case sensitive
    //R: return boolean response of whether that is a palindrome of the input
    //E: "a" = "a" TRUE
    // "hello" != "olleh" FALSE
    //P: compare string to reverse of string
    // is it the same 
    //return boolean response
    let pal = x.split('').reverse().join('')
    return x.toLowerCase() === pal.toLowerCase() ? true : false
}