

function isPalindrome(line) {
    let lineString = line.toString()
    if (lineString === lineString.split('').reverse().join('')){
        return true
    }else{
        return false
    }
}