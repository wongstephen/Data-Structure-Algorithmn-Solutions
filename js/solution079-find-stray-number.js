function stray(numbers) {
  const arr = [...new Set(numbers)];
  let output = 0;
  arr.forEach((i) => {
    if (numbers.indexOf(i) === numbers.lastIndexOf(i)) {
      output = i;
    }
  });
  return output;
}
