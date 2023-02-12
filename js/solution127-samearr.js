function comp(array1, array2) {
  if (!array1 || !array2) return false;

  const doubleArr1 = array1
    .map((i) => {
      return i ** 2;
    })
    .sort();

  for (i in doubleArr1) {
    if (doubleArr1[i] !== array2.sort()[i]) {
      return false;
    }
  }

  return true;
}
