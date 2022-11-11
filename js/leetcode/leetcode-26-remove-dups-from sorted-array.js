// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var removeDuplicates = function (nums) {
  const map = {};
  for (i in nums) {
    if (!map[nums[i]]) {
      map[nums[i]] = Number(i);
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i !== map[nums[i]]) {
      console.log(map[nums[i]]);
      nums.splice(i, 1);
    }
  }
};

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
