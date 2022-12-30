function divisors(int) {
  const result = [];
  for (let i = 2; i < int; i++) {
    if (int % i === 0) {
      result.push(i);
    }
  }
  return result.length ? result : `${int} is prime`;
}
