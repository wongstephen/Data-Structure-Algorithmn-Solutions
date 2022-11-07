// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */

var isSubsequence = function (s, t) {
  s = s.split("");
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[0]) {
      s.shift();
    }
  }
  if (!s.length) {
    return true;
  } else {
    return false;
  }
};

(s = "abc"), (t = "ahbgdc");
isSubsequence(s, t);
