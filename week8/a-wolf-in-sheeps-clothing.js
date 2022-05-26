// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

function warnTheSheep(queue) {
    //P: one array with x number of sheep and 1 wolf
    //R: based on the location of the wolf to the end of the array return one of two statements
    //if "wolf" is at the end of the array return "Pls go away and stop eating my sheep"
    // if wolf is anywhere else, return "Oi! Sheep number ${N} You are about to be eaten by a wolf!"
    //E: ["sheep", "sheep", "sheep", "wolf", "sheep"] return "Oi! Sheep number 1! You are about to be eaten by a wolf!"
    // ["wolf"] return other statement
    //P: find the index of the wolf
    // use the index of the wolf in a conditional to return the correct statement
    const wolfIndex = queue.indexOf('wolf')
    return wolfIndex === queue.length-1 ? `Pls go away and stop eating my sheep` : `Oi! Sheep number ${queue.length-1-wolfIndex}! You are about to be eaten by a wolf!`
}