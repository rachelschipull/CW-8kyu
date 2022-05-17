// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
    //P: all positive integers
    //R: return zero OR the remainder
    //E: if capacity is 10, and on is 5, wait is 5 return 0
    //if cap is 100, on is 60, wait is 50, return 10
    //P: first is on + wait > cap, if no return 0
    // if on + wait > cap = true return cap - (on + wait)
    if (on + wait > cap !== true){
    return 0
    }else{
    return ((on + wait) - cap)
    }
}