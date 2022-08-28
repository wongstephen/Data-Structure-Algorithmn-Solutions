//Square(n) Sum

function squareSum(numbers){
	return numbers.reduce((a,b)=>(a+b**2),0)
  }