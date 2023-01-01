function high(x) {
  const splitStr = x.split(" ");
  const countStr = splitStr.map((el) => {
    let result = 0;
    for (let i = 0; i < el.length; i++) {
      result += el.charCodeAt(i) - 96;
    }
    return result;
  });
  return splitStr[countStr.indexOf(Math.max(...countStr))];
}
