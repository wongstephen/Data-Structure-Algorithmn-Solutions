function narcissistic(value) {
  const arr = value.toString().split("");

  arr.forEach((num, idx) => {
    return (arr[idx] = Number(num) ** arr.length);
  });

  const result = arr.reduce((total, num) => {
    return total + num;
  });

  if (result === value) {
    return true;
  } else {
    return false;
  }
}
