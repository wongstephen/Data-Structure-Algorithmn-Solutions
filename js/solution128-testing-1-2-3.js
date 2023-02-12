var number = function (array) {
  const arr = [];
  for (let i in array) {
    arr.push(Number(i) + 1 + `: ${array[i]}`);
  }
  return arr;
};
