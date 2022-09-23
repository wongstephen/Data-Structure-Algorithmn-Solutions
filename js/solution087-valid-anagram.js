const anagrams = (a, arr) => {
  const base = a.split("").sort().join("");
  const testArr = arr.map((str) => str.split("").sort().join(""));
  const output = [];
  testArr.forEach((item, idx) => {
    if (base === item) {
      output.push(arr[idx]);
    }
  });
  return output;
};

const result = anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
console.log(result);
