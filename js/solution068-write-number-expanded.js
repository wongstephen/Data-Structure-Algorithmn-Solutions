function expandedForm(num) {
  let result = "";
  const numArr = num.toString().split(""); //[9, 0, 0, 0]
  if (numArr.length === 1) {
    return num.toString();
  }
  numArr.forEach((num, index) => {
    if (num === "0") {
      return;
    }
    if (index === numArr.length - 1) {
      return (result += ` + ${num}`);
    }
    const number = `${num.toString()}${"0".repeat(numArr.length - index - 1)}`;
    if (index !== 0) {
      result += " + ";
    }
    console.log(number);
    result += number;
  });
  return result;
}

console.log(expandedForm(2));
