function dirReduc(arr) {
  // ...
  const map = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };
  const stack = [];

  if (arr.length === 0) {
    return [];
  }

  for (dir of arr) {
    if (stack.length !== 0 && map[dir] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }
  return stack;
}
