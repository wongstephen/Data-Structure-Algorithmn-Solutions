const maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (l < r) {
    area = Math.min(height[r], height[l]) * (r - l);
    if (area > max) {
      max = area;
    }
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};

// [1,8,6,2,5,4,8,3,7]
// [1,1]
