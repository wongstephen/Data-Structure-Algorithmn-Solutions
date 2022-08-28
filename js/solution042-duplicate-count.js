/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */



function duplicateCount(text){
  const result = []
  const splitText = text.toLowerCase().split('')
  const unique = [...new Set(splitText)].forEach(value => {
    result.push(splitText.filter(e => e==value).length)
  })
  return result.filter(e=>e>1).length

} 

duplicateCount('Indivisibilities') //return 2 (i count>2, s count>2)

//1. Lowercase It
//2. Split it
//3. Unique Values in arr
//4. Filter