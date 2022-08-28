var removeDuplicates = function(nums) {
  return [...new Set(nums)].length
}
console.log(removeDuplicates([1,1,2]))