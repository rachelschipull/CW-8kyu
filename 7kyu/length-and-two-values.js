// Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.

// for input:                5, true, false
// expected result would be: [true, false, true, false, true]

//P: n equals the length of the array, firstValue and secondValue are primative values
//R: array n length starting with firstValue and alternating with secondValue
//E: for input:                5, true, false
//expected result would be: [true, false, true, false, true]
//P: create a new array
//while loop while n add true, then false then true
//if n[i] % 2 === 0 push firstValue
// n[i] % 2 === 1 push secondValue

function alternate(n, firstValue, secondValue){
    let newArray = []
    for (let i = 0; i < n; i++){
        if (i % 2 === 0){
        newArray.push(firstValue)
        }else{
        newArray.push(secondValue)
        }
    }  
    return newArray
}