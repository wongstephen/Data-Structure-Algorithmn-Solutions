//find vowels

function vowelIndices(word){
	const wordArr = word.toLowerCase().split('')
	let output = []
	for (let i=0; i<wordArr.length; i++) {
	  if (
		wordArr[i] == 'a' ||
		wordArr[i] == 'e' ||
		wordArr[i] == 'i' ||
		wordArr[i] == 'o' ||
		wordArr[i] == 'u' ||
		wordArr[i] == 'y'
  
		 ) {
		output.push(i+1)
		}
	}
	return output  
  }


/* tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", function(){
  it("Test", () => {
    assert.deepEqual(vowelIndices("mmm"), []);
    assert.deepEqual(vowelIndices("apple"), [1,5]);
    assert.deepEqual(vowelIndices("super"), [2,4]);
    assert.deepEqual(vowelIndices("orange"), [1,3,6]);
    assert.deepEqual(vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
  })
}); */