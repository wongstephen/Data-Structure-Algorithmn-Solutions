function factorial(i) {
  if (i === 0) {
    return 1;
  }
  return factorial(i - 1) * i;
}
factorial(10)