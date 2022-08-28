function isPangram(string) {
  const ltrs = "abcdefghijklmnopqrztuvwxyz".split("");
  const count = ltrs.map((ltr) => {
    return string.toLowerCase().split("").indexOf(ltr);
  });
  if (count.indexOf(-1) >= 0) {
    return false;
  }
  return true;
}
