var isSquare = function (n) {
  if (Math.floor(Math.sqrt(n)) ** 2 !== n || n < 0) {
    return false;
  }
  return true; 
};
