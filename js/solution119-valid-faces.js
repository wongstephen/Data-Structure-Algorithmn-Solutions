//return the total number of smiling faces in the array
function countSmileys(arr) {
  if (arr.length == 0) {
    return 0;
  }
  const validEyes = [":", ";"];
  const validMouth = [")", "D"];
  const validNose = ["-", "~"];
  let count = 0;

  for (el of arr) {
    const face = el.split("");
    if (
      face.length == 2 &&
      validEyes.includes(face[0]) &&
      validMouth.includes(face[1])
    ) {
      count++;
    }
    if (
      face.length == 3 &&
      validEyes.includes(face.shift()) &&
      validMouth.includes(face.pop()) &&
      validNose.includes(face.pop())
    ) {
      count++;
    }
  }
  return count;
}
