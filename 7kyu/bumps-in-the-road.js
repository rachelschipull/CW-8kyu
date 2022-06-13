//Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

//Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

//P: receive string (x) including n and _ 
//R: return "Woohoo!" if bumps do not exceed 15, else "Car Dead"
//E: "n" -> "Woohoo"
// "nnnnn___nnnnn__nn_nnnnnn" -> "Car Dead"
//P: look through the string, add count for each n
// compare count to 15 and return correct answer
function bump(x){
    let count = 0
    x.split('').forEach( i => { i === "n" ? count += 1 : 0 });
    if (count > 15){
    return "Car Dead"
    } else {
    return "Woohoo!"
    }
}