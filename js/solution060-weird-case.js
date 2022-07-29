function toWeirdCase(string){
  return string.split('').map((letter,index)=>(index+1)%2>0 ? letter.toUpperCase(): letter.toLowerCase()).join('')
}
console.log(toWeirdCase('Weird string case'))
// toWeirdCase('This') // expect: 'ThIs'
// toWeirdCase('is') // expect: 'Is'
// toWeirdCase('Weird string case') // expect: 'WeIrD StRiNg CaSe'