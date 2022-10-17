function diamond(n) {
  let diam = "";
  if (n < 0 || n % 2 === 0) {
    return null;
  }

  //for loop with i that steps by 2, adds to the string
  for (let i = 1; i <= n; i = i + 2) {
    for (let s = 0; s < (n - i) / 2; s++) {
      diam += " ";
    }

    for (let j = 0; j < i; j++) {
      diam += "*";
    }
    diam += "\n";
  }
  for (let i = n - 2; i > 0; i = i - 2) {
    for (let s = 0; s < (n - i) / 2; s++) {
      diam += " ";
    }
    for (let j = 0; j < i; j++) {
      diam += "*";
    }
    diam += "\n";
  }

  return diam;
}

//*

//1 spaces 1
//3
//1

//1 i=1   spaces 2 (n-1)/2
//3 i=i+2 spaces 1
//5 i=i+2 n<=5
//3
//1
