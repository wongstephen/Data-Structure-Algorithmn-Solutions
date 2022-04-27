function power(x, y) {
  if (y === 0) {
    return 1;
  }
  return power(x, y - 1) * x;
}
