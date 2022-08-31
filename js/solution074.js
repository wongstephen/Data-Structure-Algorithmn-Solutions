// Count characters in your string

function count(string) {
  let output = {};
  if (string.length === 0) {
    return output;
  }
  const stringArr = string.split("");
  const distinctChar = [...new Set(stringArr)];
  distinctChar.forEach((char) => {
    output[char] = stringArr.filter((letter) => letter === char).length;
  });
  return output;
}
