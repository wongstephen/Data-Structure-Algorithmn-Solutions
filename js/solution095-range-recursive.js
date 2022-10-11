function recursiveRange(n) {
  if (n === 0) {
    return 0;
  }
  return recursiveRange(n - 1) + n;
}
