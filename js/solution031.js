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