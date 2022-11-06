var replaceElements = function (arr) {
  //pointer at current item of array
  //loop through each one subsebquent of that item
  //if larger, then replace
  ///O(n2)
  let largestNum = 1;
  arr[arr.length - 1] = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    let pointer = arr[i];
    arr[i] = largestNum; //1
    if (pointer > largestNum) {
      largestNum = pointer;
    }
  }
  console.log(arr);
  return arr;
};
arr = [17, 18, 5, 4, 6, 1];
replaceElements(arr);
