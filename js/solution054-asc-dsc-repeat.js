/* You are given three integer inputs: length, minimum, and maximum.

Return a string that:

Starts at minimum
Ascends one at a time until reaching the maximum, then
Decends one at a time until reaching the minimum
repeat until the string is the appropriate length
Examples:

 length: 5, minimum: 1, maximum: 3   ==>  "12321"
 length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
 length: 11, minimum: 5, maximum: 9  ==>  "56789876567" */
 
 function ascendDescend(length, minimum, maximum) {
   let string =''
  if (length===1||length===0|| maximum < minimum){return '-'}
  function rec () {
    if (string.length===length) {return}
    for (let i = minimum; i<=maximum; i++){
      string += i
      console.log(string)
      if (string.length===length) {return}
    }
    for (let i = maximum-1; i>minimum; i--){
      string += i
      if (string.length===length) {return}
    }
    rec()
  }
  rec()
  return string
}
console.log(ascendDescend(25, -9, -3))

/* dotest(5, 1, 3, "12321");
dotest(14, 0, 2, "01210121012101");
dotest(11, 5, 9, "56789876567"); */