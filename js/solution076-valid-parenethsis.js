/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return false;
  const stack = [];
  const check = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] in check) {
      if (stack.length !== 0 && stack[stack.length - 1] === check[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }

  console.log(stack);

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isValid("([]))"));

// s = (([[]]))
