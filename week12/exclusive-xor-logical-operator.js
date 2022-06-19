// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.



//P: a and b are both booleans either true or false
//R: where a does not equal b, return true
//E: false xor false == false
// false xor true == true
//P: because of implicit return you can just say
//return a !== b

function xor(a, b) {
    return a !== b
  }