
function count (string) {  
    const strUni = [...new Set(string.split(''))]
    let output = {}
    strUni.forEach(uniqueE=>{ //a
      output[uniqueE] = string.split('').filter(e=>e===uniqueE).length
    })
    return output;
  }

console.log(count('aabbbaac'));
// console.log(count('aabbbaac'));