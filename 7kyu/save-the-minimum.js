// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    //P: array of whole number integers, could be an empty array, DO NOT MUTATE
    //R: return array with lowest number removed, if empty just return array
    //E: Input: [1,2,3,4,5], output= [2,3,4,5]
    // Input: [5,3,2,1,4], output = [5,3,2,4]
    //P: return for empty array
    //copy array
    //use Math.min(..arr) to find the minimum
    //use splice to remove the minimum once we find it
    if(!numbers)return [];
    let numbersCopy = [...numbers]
    var min=Math.min.apply(Math,numbersCopy);
    numbersCopy.splice(numbersCopy.indexOf(min),1);
    return numbersCopy;
}