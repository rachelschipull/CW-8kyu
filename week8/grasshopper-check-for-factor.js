// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

function checkForFactor (base, factor) {
    //P: both base and factor are positive integers
    //R: return a boolean, true if factor goes into base evenly
    //E: given 10 as base and 2 as factor return true
    // given 9 as base and 2 as factor return false
    //P: set up a ternary 
    //use the % operator to check if factor leaves a remainder
    return base % factor === 0 ? true : false
}