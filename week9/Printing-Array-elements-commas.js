// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

function printArray(array){
    //P: array of elements
    //R: return comma delimited (string with commas between fmr array elements)
    //E: ["h","o","l","a"] -> "h,o,l,a"
    //P: use the join() array method to join the array elements 
    return array.join(',')
}