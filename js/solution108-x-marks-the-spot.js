const xMarksTheSpot = (input) => {
  let output = [];
  let xCount = 0;
  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
      if (input[y][x] === "x") {
        xCount++;
        output = [y, x];
      }
    }
  }
  if (xCount > 1) {
    return [];
  }
  return output;
};
