function getMiddle(s) {
  const mid = s.split("").length / 2;
  if (Math.floor(mid) === mid) {
    return s[mid - 1] + s[mid];
  }
  return s[Math.floor(mid)];
}
