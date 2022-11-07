/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let words = s.trim();
  let wordsArr = words.split(" ");
  return wordsArr[wordsArr.length - 1].length;
};
