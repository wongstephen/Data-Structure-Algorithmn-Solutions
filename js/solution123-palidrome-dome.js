function palindrome(string) {
  if (!string.length) return true;

  let str = "";
  for (let i = 0; i < string.length; i++) {
    const ltr = string.toLowerCase().charCodeAt(i);
    if ((97 <= ltr && ltr <= 122) || (48 <= ltr && ltr <= 57)) {
      str += string.toLowerCase()[i];
    }
  }

  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
