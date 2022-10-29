// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
//  Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//  Example 1:

//  Input: s = "anagram", t = "nagaram"
//  Output: true
//  Example 2:

//  Input: s = "rat", t = "car"
//  Output: false

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const mapS = {};
  for (key in s) {
    if (mapS[s[key]]) {
      mapS[s[key]]++;
    } else {
      mapS[s[key]] = 1;
    }
  }

  mapT = {};
  for (key in t) {
    if (mapT[t[key]]) {
      mapT[t[key]]++;
    } else {
      mapT[t[key]] = 1;
    }
  }

  for (ltr in mapT) {
    if (mapT[ltr] !== mapS[ltr]) {
      return false;
    }
  }

  return true;
  console.log({ mapT, mapS });
};

isAnagram("anagram", "nagaram");
