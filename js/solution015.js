//
Exes and Ohs

function XO(str) {
    const strArr = str.toLowerCase().split('')
    return strArr.filter(e=>e==='x').length === strArr.filter(e=>e==='o').length && true;
}

XO('xo') // true
XO("xxOo") // false
XO("xxxm")  // false
XO("Oo")  // false
XO("ooom")  // false