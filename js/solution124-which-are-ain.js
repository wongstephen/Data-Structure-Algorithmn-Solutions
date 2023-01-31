function inArray(array1, array2) {
  const set = new Set([]);
  for (str of array2) {
    for (str1 of array1) {
      if (str.split(str1).length > 1) {
        set.add(str1);
      }
    }
  }
  const result = [...set];
  return result.sort();
}
