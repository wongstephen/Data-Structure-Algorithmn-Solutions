/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test" */

function spinWords(string){
  //TODO Have fun :)
  //identify 5 more letter words then reverse it
  //get array or words
  //identify 5 or mroe letter
  //reverse it
  const output = [];
  const strArr = string.split(' ')
  strArr.forEach(el => {
    if (el.length>=5) {
      output.push(el.split('').reverse().join(''))
    } else {
      output.push(el)
    }
  })
  return output.join(' ')
  }

  console.log(spinWords('Hey fellow warriors'))