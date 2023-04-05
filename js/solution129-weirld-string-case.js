function toWeirdCase(string) {
  if (string.length == 0) {
    return "";
  }
  let count = 0;
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let ltr = string[i].toLowerCase();
    if (ltr >= "a" && ltr <= "z") {
      if (count % 2 === 0) {
        ltr = ltr.toUpperCase();
      }
      result += ltr;
      count++;
    } else {
      result += ltr;
      count = 0;
    }
  }
  return result;
}
