// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


//p: test string and array of strings to compare to the test
//r: array of strings that are anagrams of the test (contain all the same letters in any order) 
//if no matches, return empty array
//e: 'abba', ['aabb', 'abcb', 'bbaa', 'dada'] -> ['aabb', 'bbaa']
//('laser', ['lazing', 'lazy',  'lacer']) => []
//p: set up empty array
// set up variable to sort test array (word)
// loop through the array to compare sorted word to each 'words' sorted lexographically
//if word === words push unsorted.words[i] into empty array
//return array
function anagrams(word, words) {
    let anaMatch = []
    let wordsCopy =  words.slice()
    let letters = word.split('').sort().join('')
    
    for(let i=0; i< wordsCopy.length; i++){
      if (letters === wordsCopy[i].split('').sort().join('')){
        anaMatch.push(words[i])
      }
    } return anaMatch
  } 