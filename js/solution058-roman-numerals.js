function solution(roman){
  const romanObj = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
  }
  const romanArr = roman.split('')
  let output = 0
  romanArr.forEach((letter, index)=> {
      romanObj[letter]>romanObj[romanArr[index-1]] ? output += romanObj[letter]-2*romanObj[romanArr[index-1]] :output += romanObj[letter]
  })
  return output
  // complete the solution by transforming the string roman numeral into an integer  
}
console.log(solution("MDCLXVI"))
// solution("XXI") // expected output: 21
// solution("I") // expected output: 1
// solution("IV") // expected output: 4
// solution("MMVIII") // expected output: 2008
// solution("MDCLXVI") // expected output: 1666

/* 
var romanToInt = function(s) {
  let arr = s.split('')
  const roman = {
      I:1,
      V:5,
      X:10,
      L:50,
      C:100,
      D:500,
      M:1000
  }
  let output 
  arr.forEach((letter, index)=>{
      if (roman[letter]>roman[arr[index-1]]) {
          output += roman[letter]-2*roman[arr[index-1]]
      } else {
          output += roman[letter]
      }
      
  })
  return output
}; */