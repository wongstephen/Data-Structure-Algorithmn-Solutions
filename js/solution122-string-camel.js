function toCamelCase(str) {
  let newStr = "";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "_" || str.charAt(i) == "-") {
      newStr += "*";
    } else {
      newStr += str.charAt(i);
    }
  }
  const strArr = newStr.split("*");
  result += strArr[0];
  for (let i = 1; i < strArr.length; i++) {
    result += strArr[i][0].toUpperCase();
    result += strArr[i].slice(1);
  }
  return result;
}
