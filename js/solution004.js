//Convert number to reversed array of digits

function digitize(n) {
    //code here
  
  //   console.log(n) // 35231
     const output = [];
     const number = n.toString();
     const arr = number.split('');
     for (let i = arr.length-1; i >= 0; i--) {
        output.push(Number(arr[i]));
     }
    return output
  }