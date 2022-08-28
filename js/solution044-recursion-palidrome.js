function palidrome () {
const strArr = str.split("");
if (strArr.length === 1) return true;
return strArr.pop() === strArr.shift() ? pal(strArr.join("")) : false;
}
