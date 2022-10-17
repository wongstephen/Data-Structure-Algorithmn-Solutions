var maxProfit = function (arr) {
  let l = 0;
  let r = 1;
  let max = 0;

  while (r < arr.length) {
    if (arr[l] < arr[r]) {
      let diff = arr[r] - arr[l];
      if (diff > max) {
        max = diff;
      }
    } else {
      l = r;
    }
    r++;
  }
  return max;
};
