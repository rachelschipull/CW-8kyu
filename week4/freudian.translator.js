// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was basically related to, and explained by sex.

// In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).


function toFreud(string) {
    const freudArr = string.split(' ')
    //split at spaces
  //for each word assign "sex" 
  // if empty string return empty string
    for (let i = 0; i < freudArr.length; i++){
    if (freudArr[i] === "") {
        return ""
    } else {
    freudArr[i] = 'sex' 
    }
    }
    return freudArr.join(' ')
}