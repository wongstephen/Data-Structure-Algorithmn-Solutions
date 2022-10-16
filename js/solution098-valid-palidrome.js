// s = "A man, a plan, a canal: Panama";
s = "0P";
var isPalindrome = function (s) {
  let str = "";
  s = s.toLowerCase();
  for (let char of s) {
    if (
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
      (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)
    ) {
      str += char;
    }
  }
  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    if (str[l] === str[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome(s));
