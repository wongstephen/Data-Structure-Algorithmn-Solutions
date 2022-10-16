function order(words) {

  const wordsArr = words.split("");
  const order = wordsArr.map(word=>{
    word.split.filter('')
  })


  const lettersArr = wordsArr.split("");
  lettersArr.forEach((item) => {
    if (typeof item === Number) {
      order.push(item);
    }
  });
  let result = [];
  for (let i = 0; i < wordsArr.length; i++) {
    result.push(wordArrArr[order.indexOf[i]]);
  }
  return result.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
// "Thi1s is2 3a T4est"
