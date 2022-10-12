var uniqueInOrder = function (iterable) {
  const output = [];
  for (let i = 0; i < iterable.length; i++) {
    if (i === 0) {
      output.push(iterable[0]);
    } else {
      if (iterable[i] !== iterable[i - 1]) {
        output.push(iterable[i]);
      }
    }
  }
  return output;
};
