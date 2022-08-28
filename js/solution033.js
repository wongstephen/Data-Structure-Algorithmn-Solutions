/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! 

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
});
});

*/

function pigIt(str){
	const newArr = str.split(' ');
	let output = [];
	newArr.forEach(word => {
		if (["!", ".", "?"].indexOf(word) == -1) {
			let letters = word.split('')
			letters.push(letters.shift(), 'ay')
			output.push(letters.join(''))
		} else {
			output.push(word)
		}
	});
	return output.join(' ')
} 

pigIt('Hello world ! ! !')