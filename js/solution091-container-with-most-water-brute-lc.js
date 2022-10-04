var maxArea = function (height) {
  let vol = 0;
  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      if (height[left] === height[right]) {
        let diff = height[left] * (right - left);
        if (diff > vol) {
          vol = diff;
        }
      }
      if (height[left] > height[right]) {
        let diff = height[right] * (right - left);
        if (diff > vol) {
          vol = diff;
        }
      }
      if (height[left] < height[right]) {
        let diff = height[left] * (right - left);
        if (diff > vol) {
          vol = diff;
        }
      }
    }
  }
  return vol;
};

h = [1, 1];
console.log(maxArea(h));

//brute force
