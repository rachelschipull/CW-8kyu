//Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
    //P: the number of sides of the polygon (n) (integers >2)
    //R: return the solution to the equation (n-2) * 180
    //E: n = 3 -> 180 (triangle)
    //P: return the equation
    return (n-2) * 180
}