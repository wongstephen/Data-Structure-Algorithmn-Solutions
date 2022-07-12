// Pair of gloves
/* 
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
input = [
	'Purple',  'Olive',   'Gray',    'Red',     'Teal',   'Lime',
	'Fuchsia', 'White',   'White',   'Maroon',  'Lime',   'Maroon',
	'Purple',  'Silver',  'Aqua',    'White',   'Yellow', 'Black',
	'Red',     'Maroon',  'Yellow',  'Aqua',    'Maroon', 'Fuchsia',
	'Black',   'Green',   'Fuchsia', 'Purple',  'Maroon', 'Maroon',
	'Lime',    'White',   'Blue',    'Maroon',  'Maroon', 'Yellow',
	'Fuchsia', 'Olive',   'Yellow',  'Aqua',    'Olive',  'Black',
	'Purple',  'White',   'Blue',    'Olive',   'Silver', 'Purple',
	'Yellow',  'Maroon',  'Fuchsia', 'Green',   'Yellow', 'Red',
	'Gray',    'Lime',    'Green',   'Gray',    'Blue',   'Navy',
	'Olive',   'Gray',    'Purple',  'Blue',    'Green',  'Red',
	'Red',     'Gray',    'Silver',  'Fuchsia', 'White',  'White',
	'Maroon',  'White',   'Silver',  'Green',   'Maroon', 'Aqua',
	'Fuchsia', 'Fuchsia', 'Olive',   'Purple',  'Navy',   'Navy',
	'Teal',    'Aqua',    'Teal',    'White',   'Green',  'Green',
	'Black',   'White',   'Navy',    'Black',   'Black',  'Black',
	'Navy',    'Silver'
  ] //44

const uniqueArr = [... new Set(input)]
const obj = {}
uniqueArr.forEach(el => {
	let occurance = input.filter(x => x == el).length;
	obj[el] = (occurance - occurance % 2)/2
})
let output = 0
const totalPairs = Object.keys(obj).forEach(el => {
	output += obj[el]
})
return output