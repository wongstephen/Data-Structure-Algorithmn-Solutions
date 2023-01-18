function accum(s) {
  const stringArr = s.split("");
  const expandedWords = stringArr.map((letter, idx) => {
    let word = "";
    for (let i = 0; i <= idx; i++) {
      if (i === 0) {
        word += letter.toUpperCase();
      } else {
        word += letter.toLowerCase();
      }
    }
    return word;
  });
  return expandedWords.join("-");
}
