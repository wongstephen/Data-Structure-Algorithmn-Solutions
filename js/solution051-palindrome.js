function isPalindrome(line) {
  return line === [...line].reverse().join('');
}
console.log(isPalindrome('racecar'))