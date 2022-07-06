function getSum (thisNumberBeSmall, thisNumberBeLarge){
  
  let theSmallerNumberInTheArray = 0
  let theLargerNumberInTheArray = 0
  if (thisNumberBeSmall<thisNumberBeLarge) {
    theSmallerNumberInTheArray = thisNumberBeSmall
    theLargerNumberInTheArray = thisNumberBeLarge
  } else {
    theSmallerNumberInTheArray = thisNumberBeLarge
    theLargerNumberInTheArray = thisNumberBeSmall
  }
  let yassssssss = 0
  for (let theMuthaFeakingI = theSmallerNumberInTheArray; theMuthaFeakingI<= theLargerNumberInTheArray; theMuthaFeakingI++){
    yassssssss += theMuthaFeakingI
  }
  return yassssssss
}
//fixed