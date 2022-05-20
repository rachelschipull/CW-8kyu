// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.



function well(x){
    //P: receive an array of strings with bad or good
     //R: Fail, Publish, or I smell a series depending on the number of bads or goods
     //E: ['bad', 'bad', 'bad'] = fail,
     // ['good', 'good', 'bad'] = publish
     // ['good', 'good', 'good', 'good'] = I smell a series
     //P: loop through the string to count how many "goods" using forEach?
    //: use a conditional to return the correct phrase
let count = 0
    x.forEach(a => {
    if (a === 'good'){ 
        count += 1
    }
    })
    //console.log(count)
    if (count > 2){
    return 'I smell a series!'
    } else if( count > 0){
    return 'Publish!'
    }else if (count === 0) {
    return 'Fail!'
    }
}