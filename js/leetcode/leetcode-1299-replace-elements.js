var replaceElements = function (arr) {
  //pointer at current item of array
  //loop through each one subsebquent of that item
  //if larger, then replace
  ///O(n2)

  for (let i = 0; i < arr.length; i++) {
    //pointer for first item
    arr[i] = arr[i + 1];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        arr[i] = arr[j];
      }
    }
  }
  arr[arr.length - 1] = -1;
  return arr
};

arr = [17, 18, 5, 4, 6, 1];
replaceElements(arr);
