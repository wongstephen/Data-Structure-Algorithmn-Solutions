/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hash = {};
  for (let x of strs) {
    let sortedX = x.split("").sort().join("");
    if (hash[sortedX]) {
      hash[sortedX].push(x);
    } else {
      hash[sortedX] = [x];
    }
  }
  return Object.values(hash);
};
