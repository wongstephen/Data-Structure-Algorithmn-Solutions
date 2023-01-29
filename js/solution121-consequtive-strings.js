function longestConsec(strarr, k) {
  if (strarr.length == 0 || strarr.length < k) return "";
  const map = {};
  for (let i = 0; i <= strarr.length - k; i++) {
    let str = "";
    for (let j = 0; j < k; j++) {
      str += strarr[i + j];
    }
    if (!(str.length in map)) {
      map[str.length] = str;
    }
  }
  return map[Math.max(...Object.keys(map))];
}
