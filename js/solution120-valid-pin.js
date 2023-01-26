function validatePIN(pin) {
  if (pin.length == 4 || pin.length == 6) {
    let result = false;
    const pinArr = pin.split("");
    for (let i = 0; i < pin.length; i++) {
      if (pin.charCodeAt(i) >= 48 && pin.charCodeAt(i) <= 57) {
        result = true;
      } else {
        return false;
      }
    }
    return result;
  }
  return false;
}
