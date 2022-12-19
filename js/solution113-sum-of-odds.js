function rowSumOddNumbers(n) {
  let result = 0;
  let rowNum1 = n * (n - 1) + 1;
  for (let i = 0; i < n; i++) {
    result += rowNum1 + i * 2;
  }
  return result;
}
