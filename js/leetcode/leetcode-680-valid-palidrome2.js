/*
 * @param {string} s
 * @return {boolean}
 
Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false

*/
var validPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] === s[r]) {
      l++;
      r--;
    } else {
        l++
        r -= 2
    }
  }
  return true;
};

let s = "aba";
console.log(validPalindrome(s));
