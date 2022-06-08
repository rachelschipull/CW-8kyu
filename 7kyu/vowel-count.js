// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//P: receive a string (of letters), a, e, i, o, and u are considered vowels, not y
//R: count of vowels (add to given variable but not required)
//E: "chai" -> 2
// "house" -> 3
//P: set variable to hold count of vowels
// loop through string, if character === a, e, i, o, u then += 1 to vowelsCount
//return vowelsCount

function getCount(str) {
    let vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"]
    for(let char of str) {
        if(vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount;
  }
  