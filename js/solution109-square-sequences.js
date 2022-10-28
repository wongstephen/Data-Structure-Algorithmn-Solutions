function squares(x, n) {
  let output = [];
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      output.push(x);
    } else {
      output.push(output[output.length - 1] ** 2);
    }
  }
  return output;
}
