snail = function (array) {
  const result = [];

  while (array.length > 0) {
    result.push(...array.shift());
    if (array.length > 1) {
      const length = array.length;
      for (let i = 0; i < length - 1; i++) {
        result.push(array[i].pop());
        const last = array.pop().reverse();
        result.push(...last);
      }
    } else {
      const last = array.pop().reverse();
      result.push(...last);
    }
  }

  return result;
};
