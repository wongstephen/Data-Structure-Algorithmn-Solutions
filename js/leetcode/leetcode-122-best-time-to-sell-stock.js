/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0;
  let r = 1;
  let profit = 0;
  while (r < prices.length) {
    if (prices[l] > prices[r]) {
      l = r;
      r++;
    } else if (prices[r] - prices[l] > profit) {
      profit = prices[r] - prices[l];
      r++;
    } else {
      r++;
    }
  }
  return profit;
};
