function paperwork(n, m) {
  // n classmates
  // m pages
  if (n < 0 || m < 0) {
    return 0;
  }
  return n * m;
}
