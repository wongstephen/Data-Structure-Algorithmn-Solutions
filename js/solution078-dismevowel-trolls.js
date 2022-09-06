function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return str
    .split("")
    .filter((e) => !vowels.includes(e))
    .join("");
}
