// 1. Two Sum
// Easy

// 39670

// 1282

// Add to List

// Share
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

var twoSum = function (nums, target) {
  //use hashmap
  const map = {};
  for (let num in nums) {
    const diff = target - nums[num];
    if (diff in map) {
      console.log([map[diff], num]);
      return;
    }
    map[nums[num]] = num;
  }
  console.log(map);
  //literate through each num
  //if the difference of target - nums is in hasmap, return indexes
  //else return false
};

twoSum([3, 2, 4], 6);
