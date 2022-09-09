function findUniq(arr) {
  let result = 0;
  const newArr = [...new Set(arr)];
  newArr.forEach((i) => {
    if (arr.indexOf(i) === arr.lastIndexOf(i)) {
      result = i;
    }
  });
  return result;
}
