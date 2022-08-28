//Multiples of 3 or 5
function solution(number){
    const arr = []
    for (let i = 0; i < number; i++) {
      if (i%15 === 0) {
        arr.push(i);
      } else if (i%5 === 0) {
        arr.push(i);
      } else if (i%3 === 0) {
        arr.push(i);
      }
    }
    const sumArr = arr.reduce(function (a, c) {
      return a + c},0)
    return sumArr
  }