// find the capitals

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
    let capitalAlpha = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let newArr = []
    for (let i = 0; i <= capitalAlpha.length; i++){
    if (capitalAlpha.includes(word[i])){
        newArr.push(i);
    }
    }
    return newArr;
};