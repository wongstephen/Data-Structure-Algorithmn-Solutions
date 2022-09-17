function twoSum(numbers, target) {
  // literate through each item in arr
  // find the difference
  // if key has been seen, return key index and current index
  // if key has not been seen, mutate key - index to map

  const map = {};
  for (const [idx, num] of numbers.entries()) {
    const target2 = target - num;
    if (target2 in map) {
      return [map[target2], idx];
    }
    map[num] = idx;
  }
}
