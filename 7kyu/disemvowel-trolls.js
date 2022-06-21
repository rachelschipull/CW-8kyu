// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//P: String from trolls (with vowels)
//R: string without vowels (keep y's)
//E: "This website is for losers, LOL!" -> "Ths wbst s fr lsrs LL!"
//P: with the regex tag, I think this is best solved that way
// use the global replace function in regex to replace any vowels with emptiness
function disemvowel(str) {
    return str.replace(/[aeuio]/gi,'');
}
