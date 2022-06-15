// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

//P: two arrays with 1 or more numbers inside
//R: true if the sum of the squares of the a array are greater than the cubes
//of the b array otherwise false
//E: [4, 5, 6], [1, 2, 3]); 
// returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
//P: use map to square and cube the contents of a and b
// reduce a and b arrays
// compare a and b
// return boolean

function arrayMadness(a, b) {
    const aSquare = a.map( x => x**2)
    const bCube = b.map( y => y**3)
    if (aSquare.reduce((d, c) => d + c, 0) > bCube.reduce((g, f) => g + f, 0)){
        return true
    }else{
        return false
    }
}