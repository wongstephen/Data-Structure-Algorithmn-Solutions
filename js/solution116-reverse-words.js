function reverseWords(str) {
  const strArr = str.split(" ");
  const strRev = strArr.map((word) => {
    let result = "";
    for (let i = word.length - 1; i >= 0; i--) {
      result += word[i];
    }
    return result;
  });
  return strRev.join(" ");
}
