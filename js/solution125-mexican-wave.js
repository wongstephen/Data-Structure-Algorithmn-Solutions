function wave(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const strarr = str.split("");
    strarr[i] = strarr[i].toUpperCase();
    if (strarr[i] !== " ") {
      result.push(strarr.join(""));
    }
  }
  return result;
}
