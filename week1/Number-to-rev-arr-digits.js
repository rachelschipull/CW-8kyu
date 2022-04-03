// Given a random non-negative number, you have to return the digist of this number within an array in reverse order.

//Example:
//348597 => [7,9,5,8,4,3]
//0 => [0]

function digitize(n) {
    let newArray = Array.from(String(n), Number)
    return newArray.reverse()
  }