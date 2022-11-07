function removeSmallest(numbers) {
  //   throw "TODO: removeSmallest";
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  const indexToRemove = numbers.indexOf(min);
  numbers.splice(indexToRemove, 1);
  return numbers;
}
