function printerError(s) {
  let err = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > "m".charCodeAt(0)) {
      err++;
    }
  }
  return `${err}/${s.length}`;
}
