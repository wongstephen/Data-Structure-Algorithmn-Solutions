g/* 
THE INSTRUCTIONS ARE BAD, I ONLY NEEDED TO RETURN 2. I THOUGHT I HAD TO RETURN THE WHOLE SENTANCE. I'M GOING TO SAY THIS IS CORRECT BUT WILL WORK ON THE NEXT SOLUTION TO ANSWER THIS.

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair). 



input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs) 

        let tests = [
          [['red','red'],1],
          [['red','green','blue'],0],
          [['gray','black','purple','purple','gray','black'],3]
 */


//GET UNIQUE ARR FROM PARAM
input = ["red", "red", "red", "red", "red", "red"]
const uniqueArr = [... new Set(input)] //unique values
//TOSS IN AN OBJECT KEY VALUES OF COLOR/COUNT
const obj = {}
uniqueArr.forEach(el => {
	let occurance = input.filter(x => x == el).length; //times each color
	obj[el] = (occurance - occurance % 2)/2 //pairs
})
console.log(obj)
//TAKE EACH KEY AND FIND OUT OF THERE ARE REMAINDERS. I.E. RED: 5%2 EVALS TO 1. THEN SUBTRACT FROM COUNT. THEN DIVIDE NUMBER BY 2 TO FIND NUMBER OF PAIRS IN THAT KEY.
//COUNT HOW MANY KEYS ARE IN THE OBJ  
const totalPairs = Object.keys(obj).filter(key => obj[key]>0).length
console.log(totalPairs)
//CONSTRUCT SENTANCE FOR HOW MANY PAIRS OF EACH
let colors = ''
const uniquePairs = Object.keys(obj).filter(key => obj[key]>0)
uniquePairs.forEach((el, i)=> {
	colors += obj[el] + ' ' + el + ' pair'
	if (obj[el]>1) {
		colors += "s"
	}
	if (totalPairs > 1 && i < uniquePairs.length-1) {
		colors += ' + '
	}
	console.log('index ' + i + " " + uniquePairs.length)
})

console.log(`${totalPairs} (${colors})`)