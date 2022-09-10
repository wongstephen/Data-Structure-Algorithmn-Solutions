console.log(String.fromCharCode(75));
console.log("a".charCodeAt());

function findMissingLetter(array) {
  //what is unicode of first letter
  //what is length
  //find what should be in the array, if that letter is not in the array then return that letter
  const arrLength = array.length;
  const firstCharUni = array[0].charCodeAt();

  let result;
  for (let i = 0; i < array.length; i++) {
    //add
    if (!array.includes(String.fromCharCode(firstCharUni + i))) {
      result = String.fromCharCode(firstCharUni + i);
    }
  }

  return result;
}

const output = findMissingLetter(["a", "b", "c", "d", "f"]);

console.log(output);

// ['a','b','c','d','f')], 'e');
