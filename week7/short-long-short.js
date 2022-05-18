// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

function solution(a, b){
    //P: strings, which may be empty, one is longer than the other
    //R: return one string which has the long string in the middle and the short string on either end
    //E: a = '45', b = '1' return '1451'
    // a = 'U', b = 'False' return 'UFalseU'
    // a = '', b = 'something' return 'something'
    //P: check for which input is larger
    //join inputs as one string based on the short-long-short criteria
    if (a.length > b.length){
    return `${b}${a}${b}`
    }else{
    return `${a}${b}${a}`
    }
}

// function solution(a, b) {
//     return a.length < b.length ? a + b + a : b + a + b
// }