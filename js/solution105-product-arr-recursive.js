function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  let updated = arr.pop();
  return productOfArray(arr) * updated;
}
