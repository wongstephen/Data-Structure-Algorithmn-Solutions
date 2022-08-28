//Counting sheep...
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(e=>e).length
  }

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));