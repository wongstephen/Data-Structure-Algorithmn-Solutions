#([10, 7, 5, 8, 11, 9]), 6)
#. l   r
def max_profit(prices):
    l = 0
    r = 1
    max = -1
    while r < len(prices):
        if prices[l]<=prices[r]:
            diff = prices[r]-prices[l]
            if max < diff:
                max = diff
        else:
            l = r
        r = r + 1
    return max

max_profit([10, 7, 5, 8, 11, 9])