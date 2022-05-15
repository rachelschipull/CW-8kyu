// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.



// P: nbPetals is integer, and >0
    //R: return phrase based on the order of the integer from nbPetals
    //E: if nbPetals === 1, return "I Love you" if nbPetals === 2, return "a little"
    //P
    //Set up the phrases as an array
    //use the number from nbPetals to choose the index of the array
    //return the value of the array at the correct index
    const phrases = [
        'not at all',
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
]
    
    const howMuchILoveYou = n => phrases[n % 6]