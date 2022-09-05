/**
 * @param {number[]} numbers An array of numbers.
 * @return {number} A number that represents the greatest sum of two elements.
 */
function findMaxSum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  const sorted = numbers.sort((a, b) => a - b);
  return sorted[sorted.length - 1] + sorted[sorted.length - 2];
}

console.log(findMaxSum([5, 9, 7, 12])); // should print 21
console.log(findMaxSum([11, 2, 4, 5])); // should print 16
