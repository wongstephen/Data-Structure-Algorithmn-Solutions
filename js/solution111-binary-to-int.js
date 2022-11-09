const binaryArrayToNumber = (arr) => {
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    number += arr[arr.length - 1 - i] * 2 ** i;
  }
  return number;
};
