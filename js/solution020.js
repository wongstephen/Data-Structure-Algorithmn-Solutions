//remove vowels from sentance
const removeVowel = (text) => {
    const vowels = 'aeiou'.split('');
    const output = [];
    let string = text.split('')
    string.forEach(stringLetter => { //outer loop: array of letters from text
        if (
            stringLetter.toLowerCase() !== 'a' ||
            stringLetter.toLowerCase() !== 'e' ||
            stringLetter.toLowerCase() !== 'i' ||
            stringLetter.toLowerCase() !== 'o' ||
            stringLetter.toLowerCase() !== 'u' 
            ) { 
            output.push(stringLetter)
        } 
        // inner loop:vowers
        // check if string does not equal a vowel
    });
    console.log(output.join(''))
}
w
removeVowel('Vowels are removed from sentance'); //output should be: Vwls r rmvd from sntnc

