function removeSmallest(numbers) {
  //   throw "TODO: removeSmallest";
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  const indexToRemove = numbers.indexOf(min);
  let output = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i !== indexToRemove) {
      output.push(numbers[i]);
    }
  }
  return output;
}
